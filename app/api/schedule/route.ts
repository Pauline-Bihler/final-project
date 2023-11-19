import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createSchedule } from '../../../database/schedules';
import { getValidSessionByToken } from '../../../database/sessions';

const scheduleSchema = z.object({
  userId: z.number(),
  day: z.string().min(2),
  time: z.string().min(2),
});

export type CreateScheduleResponseBodyPost =
  | {
      Day: { day: string };
    }
  | {
      Time: { time: string };
    }
  | {
      errors: { message: string }[];
    };

export async function POST(
  request: NextRequest,
): Promise<NextResponse<CreateScheduleResponseBodyPost>> {
  // 1. Get the note data from the request
  const body = await request.json();

  // 2. Validate the data
  const result = scheduleSchema.safeParse(body);

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
  const newSchedule = await createSchedule(
    result.data.userId,
    result.data.day,
    result.data.time,
  );

  // 4. If the note creation fails, return an error

  if (!newSchedule) {
    return NextResponse.json(
      {
        errors: [{ message: 'Note creation failed' }],
      },
      { status: 500 },
    );
  }

  // 6. Return the text content of the note
  return NextResponse.json({
    Day: { day: newSchedule.day },
    Time: { time: newSchedule.time },
  });
}
