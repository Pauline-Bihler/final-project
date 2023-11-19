import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
// import { getAllUserAdoptions } from '../../../database/users';
import {
  getUserAdoptionBySessionToken,
  getUserBySessionToken,
} from '../../../database/users';
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

  return (
    <div className={styles['centeredContainer']}>
      <h1>You are currently logged-in</h1>
      <h2>{params.username}'s profile page</h2>
      <div>
        {userAdoptions.length > 0 ? (
          <>
            <h2>All Adoption Forms</h2>

            <ul>
              {userAdoptions.map((adoption) => (
                <li
                  key={`animal-div-${adoption.adoptionId}`}
                  className={styles.adoptionForm}
                >
                  <p className={styles.adoptionQuestion}>
                    What's the name of the resident that you want to adopt?
                  </p>
                  <p className={styles.adoptionAnswer}>{adoption.animalName}</p>
                  <p className={styles.adoptionQuestion}>
                    Which type do you want to adopt?
                  </p>
                  <p className={styles.adoptionAnswer}>
                    {adoption.questionOne}
                  </p>
                  <p className={styles.adoptionQuestion}>First Name:</p>
                  <p className={styles.adoptionAnswer}>{adoption.firstName}</p>
                  <p className={styles.adoptionQuestion}>Last Name:</p>
                  <p className={styles.adoptionAnswer}>{adoption.lastName}</p>
                  <p className={styles.adoptionQuestion}>Email:</p>
                  <p className={styles.adoptionAnswer}>{adoption.email}</p>
                  <p className={styles.adoptionQuestion}>Phone number:</p>
                  <p className={styles.adoptionAnswer}>{adoption.phone}</p>
                  <p className={styles.adoptionQuestion}>
                    Do you have a pet at home?
                  </p>
                  <p className={styles.adoptionAnswer}>
                    {adoption.questionTwo}
                  </p>
                  <p className={styles.adoptionQuestion}>
                    Do you have any experiences with cats/dogs?
                  </p>
                  <p className={styles.adoptionAnswer}>
                    {adoption.questionThree}
                  </p>
                  <p className={styles.adoptionQuestion}>
                    Do you live in a house or an apartment?
                  </p>
                  <p className={styles.adoptionAnswer}>
                    {adoption.questionFour}
                  </p>
                  <p className={styles.adoptionQuestion}>Additional remarks?</p>
                  <p className={styles.adoptionAnswer}>
                    {adoption.additionalRemarks}
                  </p>
                  {/* <p>Posted by: {adoption.username}</p> */}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <h2> No adoption forms yet</h2>
        )}
      </div>
    </div>
  );
}
