import { deleteSchedule } from '../../../database/schedules';

export const deleteUserSchedule = async (
  scheduleId: number,
  userId: number,
) => {
  try {
    const deletedSchedule = await deleteSchedule(scheduleId, userId);
    return deletedSchedule;
  } catch (error) {
    console.error('Error deleting schedule:', error);
    throw error;
  }
};
