import crypto from 'node:crypto';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createSession } from '../../../../database/sessions';
import { createUser, getUserByUsername } from '../../../../database/users';
import { User } from '../../../../migrations/00000-createTableUsers';
import { secureCookieOptions } from '../../../../util/cookies';

// console.log('route active');

const registerSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(3),
  email: z.string().min(3),
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  age: z.number(),
});

export type RegisterResponseBodyPost =
  | {
      user: User;
    }
  | {
      errors: { message: string }[];
    };

export async function POST(
  request: NextRequest,
): Promise<NextResponse<RegisterResponseBodyPost>> {
  // 1. Get the user data from the request
  const body = await request.json();

  // console.log('body:', body);

  // 2. Validate user data
  const result = registerSchema.safeParse(body);

  if (!result.success) {
    // zod send you details about the error
    // console.log(result.error);
    return NextResponse.json(
      {
        errors: result.error.issues,
      },
      { status: 400 },
    );
  }

  // console.log('result:', result);

  // 3. Check if user already exist in the database
  const user = await getUserByUsername(result.data.username);

  if (user) {
    return NextResponse.json(
      { errors: [{ message: 'username is already taken' }] },
      { status: 403 },
    );
  }

  // console.log('Result:', user);

  // 4. Hash the plain password from the user
  const passwordHash = await bcrypt.hash(result.data.password, 12);

  console.log('Result:', passwordHash, result.data.password);

  // 5. Save the user information with the hashed password in the database

  const newUser = await createUser(
    result.data.username,
    passwordHash,
    result.data.email,
    result.data.firstName,
    result.data.lastName,
    result.data.age,
  );

  console.log('Result:', newUser);

  if (!newUser) {
    return NextResponse.json(
      { errors: [{ message: 'Error creating the new user' }] },
      { status: 406 },
    );
  }

  // 5.1 Create a token
  const token = crypto.randomBytes(100).toString('base64');

  // console.log('Token: ', token);

  // 5.2 Create the session record
  const session = await createSession(newUser.id, token);

  // console.log('Session: ', session);

  if (!session) {
    return NextResponse.json(
      { errors: [{ message: 'Error creating the new session' }] },
      {
        status: 401,
      },
    );
  }

  // 5.3 Send the new cookie in the headers
  // console.log('Session: ', session);

  // cookies().set({
  //   name: 'sessionToken',
  //   value: session.token,
  //   httpOnly: true,
  //   path: '/',
  //   secure: process.env.NODE_ENV === 'production',
  //   maxAge: 60 * 60 * 24, // Expires in 24 hrs
  //   sameSite: 'lax', // This prevents CSRF attacks
  // });

  cookies().set({
    name: 'sessionToken',
    value: session.token,
    ...secureCookieOptions,
  });

  // 6. Return the new user information without the password hash

  return NextResponse.json({
    user: newUser,
  });
}
