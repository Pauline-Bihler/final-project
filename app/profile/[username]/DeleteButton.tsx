'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { deleteUserSchedule } from './actions';

// export default function DeleteButton() {
//   const router = useRouter();

//   const handleDelete = async () => {
//     await deleteUserSchedule();
//     router.refresh();
//   };

//   return (
//     <form action="/delete" method="post">
//       <button className={styles['delete-button']} onClick={handleDelete}>
//         Reschedule
//       </button>
//     </form>
//   );
// }

type DeleteButtonProps = {
  scheduleId: number;
  userId: number;
  onDelete: () => void;
};

export default function DeleteButton({
  scheduleId,
  userId,
  onDelete,
}: DeleteButtonProps) {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await deleteUserSchedule(scheduleId, userId);

      // Call the onDelete function passed as a prop
      onDelete();
    } catch (error) {
      console.error('Error deleting schedule:', error);
    }
    router.refresh();
  };

  return (
    <button className={styles['delete-button']} onClick={handleDelete}>
      Reschedule
    </button>
  );
}
