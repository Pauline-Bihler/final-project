import { cache } from 'react';
import { Adoption } from '../migrations/00005-createTableAdoptions';
import { sql } from './connect';

export const createAdoption = cache(
  async (
    userId: number,
    animalName: string,
    questionOne: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    questionTwo: boolean,
    questionThree: boolean,
    questionFour: string,
    additionalRemarks: string | null,
  ) => {
    const [adoption] = await sql<Adoption[]>`
      INSERT INTO
        adoptions (
          user_id,
          animal_name,
          question_one,
          first_name,
          last_name,
          email,
          phone,
          question_two,
          question_three,
          question_four,
          additional_remarks
        )
      VALUES
        (
          ${userId},
          ${animalName},
          ${questionOne},
          ${firstName},
          ${lastName},
          ${email},
          ${phone},
          ${questionTwo},
          ${questionThree},
          ${questionFour},
          ${additionalRemarks}
        ) RETURNING *
    `;

    return adoption;
  },
);
