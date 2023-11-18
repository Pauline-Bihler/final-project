import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createAdoption } from '../../../database/adoptions';
import { getValidSessionByToken } from '../../../database/sessions';

const adoptionSchema = z.object({
  userId: z.number(),
  animalName: z.string().min(2),
  questionOne: z.string().min(1),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().min(2),
  phone: z.string().min(2),
  questionTwo: z.string().min(2),
  questionThree: z.string().min(2),
  questionFour: z.string().min(1),
  additionalRemarks: z.string().min(2),
});

export type CreateAdoptionResponseBodyPost =
  | {
      AnimalName: { animalName: string };
    }
  | {
      QuestionOne: { questionOne: string };
    }
  | {
      FirstName: { firstName: string };
    }
  | {
      LastName: { lastName: string };
    }
  | {
      Email: { email: string };
    }
  | {
      Phone: { phone: string };
    }
  | {
      QuestionTwo: { questionTwo: string };
    }
  | {
      QuestionTwo: { questionTwo: string };
    }
  | {
      QuestionFour: { questionFour: string };
    }
  | {
      AdditionalRemarks: { additionalRemarks: string };
    }
  | {
      Content: { textContent: string };
    }
  | {
      errors: { message: string }[];
    };

export async function POST(
  request: NextRequest,
): Promise<NextResponse<CreateAdoptionResponseBodyPost>> {
  // 1. Get the note data from the request
  const body = await request.json();

  // 2. Validate the data
  const result = adoptionSchema.safeParse(body);

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
  const newAdoption = await createAdoption(
    result.data.userId,
    result.data.animalName,
    result.data.questionOne,
    result.data.firstName,
    result.data.lastName,
    result.data.email,
    result.data.phone,
    result.data.questionTwo,
    result.data.questionThree,
    result.data.questionFour,
    result.data.additionalRemarks,
  );

  // 4. If the note creation fails, return an error

  if (!newAdoption) {
    return NextResponse.json(
      {
        errors: [{ message: 'Note creation failed' }],
      },
      { status: 500 },
    );
  }

  // 6. Return the text content of the note
  return NextResponse.json({
    AnimalName: { animalName: newAdoption.animalName },
    QuestionOne: { questionOne: newAdoption.questionOne },
    FirstName: { firstName: newAdoption.firstName },
    LastName: { lastName: newAdoption.lastName },
    Email: { email: newAdoption.email },
    Phone: { phone: newAdoption.phone },
    QuestionTwo: { questionTwo: newAdoption.questionTwo },
    QuestionThree: { questionThree: newAdoption.questionThree },
    QuestionFour: { questionFour: newAdoption.questionFour },
    AdditionalRemarks: { additionalRemarks: newAdoption.additionalRemarks },
  });
}
