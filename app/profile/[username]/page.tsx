import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
// import { getAllUserAdoptions } from '../../../database/users';
import {
  getUserAdoptionBySessionToken,
  getUserBySessionToken,
  getUserScheduleBySessionToken,
} from '../../../database/users';
// import DeleteButton from './DeleteButton';
import styles from './page.module.scss';

type Props = {
  params: { username: string };
};

export default async function UserProfilePage({ params }: Props) {
  // console.log('Check:', params);
  // const allUserAdoptions = await getAllUserAdoptions();
  const sessionTokenCookie = cookies().get('sessionToken');

  const user =
    sessionTokenCookie &&
    (await getUserBySessionToken(sessionTokenCookie.value));

  if (!user) redirect('/login');

  const userAdoptions = await getUserAdoptionBySessionToken(
    sessionTokenCookie.value,
  );

  const userSchedules = await getUserScheduleBySessionToken(
    sessionTokenCookie.value,
  );

  return (
    <div className={styles['centeredContainer']}>
      {/* <h1>You are currently logged-in</h1> */}
      <h2>{params.username}'s profile page</h2>
      <div className={styles.formContainer}>
        <div>
          {userSchedules.length > 0 ? (
            <>
              <h2 className={styles.text}>All Schedules Booked</h2>
              <ul>
                {userSchedules.map((schedule) => (
                  <li
                    key={`animal-div-${schedule.scheduleId}`}
                    className={styles.scheduleForm}
                  >
                    <p className={styles.question}>
                      Please enter the day you want to visit:
                    </p>
                    <p className={styles.answer}>{schedule.day}</p>
                    <p className={styles.question}>
                      Please enter the time you want to visit:
                    </p>
                    <p className={styles.answer}>{schedule.time}</p>
                    {/* <DeleteButton
                      scheduleId={schedule.scheduleId}
                      userId={user.id}
                      onDelete={() => {}}
                    /> */}
                    {/* <DeleteButton /> */}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <h2 className={styles['no-bookings']}>
              {' '}
              No bookings yet <br />
            </h2>
          )}
        </div>
        <div>
          {userAdoptions.length > 0 ? (
            <>
              <h2 className={styles.text}>All Adoption Forms</h2>
              <ul>
                {userAdoptions.map((adoption) => (
                  <li
                    key={`animal-div-${adoption.adoptionId}`}
                    className={styles.adoptionForm}
                  >
                    <p className={styles.question}>
                      What's the name of the resident that you want to adopt?
                    </p>
                    <p className={styles.answer}>{adoption.animalName}</p>
                    <p className={styles.question}>
                      Which type do you want to adopt?
                    </p>
                    <p className={styles.answer}>{adoption.questionOne}</p>
                    <p className={styles.question}>First Name:</p>
                    <p className={styles.answer}>{adoption.firstName}</p>
                    <p className={styles.question}>Last Name:</p>
                    <p className={styles.answer}>{adoption.lastName}</p>
                    <p className={styles.question}>Email:</p>
                    <p className={styles.answer}>{adoption.email}</p>
                    <p className={styles.question}>Phone number:</p>
                    <p className={styles.answer}>{adoption.phone}</p>
                    <p className={styles.question}>
                      Do you have a pet at home?
                    </p>
                    <p className={styles.answer}>{adoption.questionTwo}</p>
                    <p className={styles.question}>
                      Do you have any experiences with cats/dogs?
                    </p>
                    <p className={styles.answer}>{adoption.questionThree}</p>
                    <p className={styles.question}>
                      Do you live in a house or an apartment?
                    </p>
                    <p className={styles.answer}>{adoption.questionFour}</p>
                    <p className={styles.question}>Additional remarks?</p>
                    <p className={styles.answer}>
                      {adoption.additionalRemarks}
                    </p>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <h2 className={styles['no-bookings']}>
              {' '}
              No adoption forms yet <br />
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}
