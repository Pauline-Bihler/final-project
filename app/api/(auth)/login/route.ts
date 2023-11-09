import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getUserWithPasswordHashByUsername } from '../../../../database/users';

// console.log('route active');

const loginSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(3),
  // email: z.string().min(3),
  // firstName: z.string().min(3),
  // lastName: z.string().min(3),
  // age: z.number(),
});

export type LoginResponseBodyPost =
  | {
      user: { username: string };
    }
  | {
      errors: { message: string }[];
    };

export async function POST(
  request: NextRequest,
): Promise<NextResponse<LoginResponseBodyPost>> {
  // Implement the user login workflow

  // 1. Get the user data from the request
  const body = await request.json();

  // console.log('body:', body);

  // 2. Validate user data
  const result = loginSchema.safeParse(body);

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

  // 3. Verify the user credentials
  const userWithPasswordHash = await getUserWithPasswordHashByUsername(
    result.data.username,
  );

  if (!userWithPasswordHash) {
    return NextResponse.json(
      { errors: [{ message: 'username or password not valid' }] },
      { status: 403 },
    );
  }

  // console.log('Check:', userWithPasswordHash);

  // 4. Validate the user password by comparing with hashed password
  const isPasswordValid = await bcrypt.compare(
    result.data.password,
    userWithPasswordHash.passwordHash,
  );

  // console.log('Result:', passwordHash, result.data.password);

  // console.log(
  //   'Check Valid:',
  //   isPasswordValid,
  //   result.data.password,
  //   userWithPasswordHash.passwordHash,
  // );

  if (!isPasswordValid) {
    return NextResponse.json(
      { errors: [{ message: 'username or password not valid' }] },
      { status: 401 },
    );
  }

  // 4. Create a token
  // 5. Create the session record
  // 6. Send the new cookie in the headers

  // Return the new user information without the password hash
  return NextResponse.json({
    user: {
      username: userWithPasswordHash.username,
    },
  });
}
