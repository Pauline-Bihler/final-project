import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createPost } from '../../../database/posts';
import { getValidSessionByToken } from '../../../database/sessions';

const postSchema = z.object({
  userId: z.number(),
  textTitle: z.string().min(3),
  textContent: z.string().min(3),
});

export type CreatePostResponseBodyPost =
  | {
      Title: { textTitle: string };
    }
  | {
      Content: { textContent: string };
    }
  | {
      errors: { message: string }[];
    };

export async function POST(
  request: NextRequest,
): Promise<NextResponse<CreatePostResponseBodyPost>> {
  // 1. Get the note data from the request
  const body = await request.json();

  // 2. Validate the data
  const result = postSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { errors: result.error.issues },
      {
        status: 400,
      },
    );
  }

  // 1. get the token from the cookie
  const sessionTokenCookie = cookies().get('sessionToken');

  // 2. check if the token has a valid session
  const session =
    sessionTokenCookie &&
    (await getValidSessionByToken(sessionTokenCookie.value));

  if (!session) {
    return NextResponse.json(
      {
        errors: [{ message: 'Authentication token is invalid' }],
      },
      { status: 401 },
    );
  }

  // 3. Create the note
  const newPost = await createPost(
    result.data.userId,
    result.data.textTitle,
    result.data.textContent,
  );

  // 4. If the note creation fails, return an error

  if (!newPost) {
    return NextResponse.json(
      {
        errors: [{ message: 'Note creation failed' }],
      },
      { status: 500 },
    );
  }

  // 6. Return the text content of the note
  return NextResponse.json({
    Title: { textTitle: newPost.textTitle },
    Content: { textContent: newPost.textContent },
  });
}
