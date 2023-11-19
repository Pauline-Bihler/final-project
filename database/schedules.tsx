import { cache } from 'react';
import { Schedule } from '../migrations/00006-createTableSchedules';
import { sql } from './connect';

export const createSchedule = cache(
  async (userId: number, day: string, time: string) => {
    const [schedule] = await sql<Schedule[]>`
      INSERT INTO
        schedules (
          user_id,
          DAY,
          TIME
        )
      VALUES
        (
          ${userId},
          ${day},
          ${time}
        ) RETURNING *
    `;

    return schedule;
  },
);
