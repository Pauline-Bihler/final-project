import { Sql } from 'postgres';

export type Adoption = {
  id: number;
  userId: number;
  animalName: string;
  questionOne: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  questionTwo: boolean;
  questionThree: boolean;
  questionFour: string;
  additionalRemarks: string | null;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE
      adoptions (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        user_id INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE,
        animal_name VARCHAR(300) NOT NULL,
        question_one VARCHAR(300) NOT NULL,
        first_name VARCHAR(300) NOT NULL,
        last_name VARCHAR(300) NOT NULL,
        email VARCHAR(300) NOT NULL,
        phone VARCHAR(300) NOT NULL,
        question_two BOOLEAN NOT NULL,
        question_three BOOLEAN NOT NULL,
        question_four VARCHAR(300) NOT NULL,
        additional_remarks text
      );
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE adoptions `;
}
