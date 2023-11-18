'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './AdoptMeForm.module.scss';
import { AdoptMeSubmitButton } from './AdoptMeSubmitButton';

export default function AdoptMeForm({ userId }: { userId: number }) {
  const [animalName, setAnimalName] = useState('');
  const [questionOne, setQuestionOne] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [questionTwo, setQuestionTwo] = useState('');
  const [questionThree, setQuestionThree] = useState('');
  const [questionFour, setQuestionFour] = useState('');
  const [additionalRemarks, setAdditionalRemarks] = useState('');
  const router = useRouter();

  // console.log('Check:', firstName);

  async function handleCreateAdoption() {
    await fetch('/api/adopt', {
      method: 'POST',
      body: JSON.stringify({
        animalName,
        questionOne,
        firstName,
        lastName,
        email,
        phone,
        questionTwo,
        questionThree,
        questionFour,
        additionalRemarks,
        userId,
      }),
    });
    router.refresh();
    setAnimalName('');
    setQuestionOne('');
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setQuestionTwo('');
    setQuestionThree('');
    setQuestionFour('');
    setAdditionalRemarks('');
  }
  //   return (
  //     <main>
  //       <div className={styles['overall-container']}>
  //         <h1 className={styles['text']}>Adopt Me Form</h1>
  //         <form
  //           className={styles['form']}
  //           onSubmit={async (event) => {
  //             event.preventDefault();
  //             await handleCreateAdoption();
  //           }}
  //         >
  //           <div className={styles['form-row']}>
  //             <label className={styles['label']} htmlFor="animalName">
  //               What's the name of the resident that you want to adopt?
  //             </label>
  //             <input
  //               value={animalName}
  //               onChange={(event) => setAnimalName(event.currentTarget.value)}
  //               required
  //               placeholder="Animal Name"
  //               data-test-id="adopt-me-form-animal-name"
  //               // id="AnimalName"
  //               className={styles['input']}
  //             />
  //           </div>
  //           <label className={styles['label']}>
  //             Which type do you want to adopt?
  //             <div>
  //               <input
  //                 value={questionOne}
  //                 onChange={(event) => setQuestionOne(event.currentTarget.value)}
  //                 type="radio"
  //                 // id="cat"
  //                 name="animalType"
  //                 required
  //                 data-test-id="question-one"
  //               />
  //               <label htmlFor="cat" className={styles['label']}>
  //                 Cat
  //               </label>
  //             </div>
  //             <div>
  //               <input
  //                 value={questionOne}
  //                 onChange={(event) => setQuestionOne(event.currentTarget.value)}
  //                 type="radio"
  //                 // id="dog"
  //                 name="animalType"
  //                 required
  //                 data-test-id="question-one"
  //               />
  //               <label htmlFor="dog" className={styles['label']}>
  //                 Dog
  //               </label>
  //             </div>
  //           </label>
  //           <br />
  //           <div className={styles['form-row']}>
  //             <label className={styles['label']} htmlFor="firstName">
  //               First Name:
  //             </label>
  //             <input
  //               value={firstName}
  //               onChange={(event) => setFirstName(event.currentTarget.value)}
  //               required
  //               placeholder="First Name"
  //               data-test-id="adopt-me-form-first-name"
  //               // id="firstName"
  //               className={styles['input']}
  //             />
  //           </div>
  //           <div className={styles['form-row']}>
  //             <label className={styles['label']} htmlFor="lastName">
  //               Last Name:
  //             </label>
  //             <input
  //               required
  //               placeholder="Last Name"
  //               data-test-id="adopt-me-form-last-name"
  //               id="lastName"
  //               className={styles['input']}
  //               onChange={(event) => setLastName(event.currentTarget.value)}
  //             />
  //           </div>
  //           <div className={styles['form-row']}>
  //             <label className={styles['label']} htmlFor="lastName">
  //               E-Mail:
  //             </label>
  //             <input
  //               required
  //               placeholder="E-Mail:"
  //               data-test-id="adopt-me-form-email"
  //               id="email"
  //               className={styles['input']}
  //               onChange={(event) => setEmail(event.currentTarget.value)}
  //             />
  //           </div>
  //           <div className={styles['form-row']}>
  //             <label className={styles['label']} htmlFor="phoneNumber:">
  //               Phone number:
  //             </label>
  //             <input
  //               required
  //               placeholder="Phone number:"
  //               data-test-id="adopt-me-phone-number"
  //               id="phoneNumber"
  //               className={styles['input']}
  //               onChange={(event) => setPhone(event.currentTarget.value)}
  //             />
  //           </div>
  //           <br />
  //           <label className={styles['label']}>
  //             Do you have a pet at home?
  //             <div>
  //               <input
  //                 type="radio"
  //                 id="yes"
  //                 name="petAtHome"
  //                 value="yes"
  //                 required
  //                 data-test-id="adopt-me-form-question2-yes"
  //                 onChange={(event) => setQuestionTwo(event.currentTarget.value)}
  //               />
  //               <label htmlFor="yes" className={styles['label']}>
  //                 Yes
  //               </label>
  //             </div>
  //             <div>
  //               <input
  //                 type="radio"
  //                 id="no"
  //                 name="petAtHome"
  //                 value="no"
  //                 required
  //                 data-test-id="adopt-me-form-question2-no"
  //                 onChange={(event) => setQuestionTwo(event.currentTarget.value)}
  //               />
  //               <label htmlFor="no" className={styles['label']}>
  //                 No
  //               </label>
  //             </div>
  //           </label>
  //           <br />
  //           <label className={styles['label']}>
  //             Do you have any experiences with cats/dogs?
  //             <div>
  //               <input
  //                 type="radio"
  //                 id="yes"
  //                 name="experienceWithPets"
  //                 value="yes"
  //                 required
  //                 data-test-id="adopt-me-form-question3-yes"
  //                 onChange={(event) =>
  //                   setQuestionThree(event.currentTarget.value)
  //                 }
  //               />
  //               <label htmlFor="yes" className={styles['label']}>
  //                 Yes
  //               </label>
  //             </div>
  //             <div>
  //               <input
  //                 type="radio"
  //                 id="no"
  //                 name="experienceWithPets"
  //                 value="no"
  //                 required
  //                 data-test-id="adopt-me-form-question3-no"
  //                 onChange={(event) =>
  //                   setQuestionThree(event.currentTarget.value)
  //                 }
  //               />
  //               <label htmlFor="no" className={styles['label']}>
  //                 No
  //               </label>
  //             </div>
  //           </label>
  //           <br />
  //           <label className={styles['label']}>
  //             Do you live in a house or an apartment?
  //             <div>
  //               <input
  //                 type="radio"
  //                 id="house"
  //                 name="houseType"
  //                 value="house"
  //                 required
  //                 data-test-id="adopt-me-form-question4-house"
  //                 onChange={(event) => setQuestionFour(event.currentTarget.value)}
  //               />
  //               <label htmlFor="house" className={styles['label']}>
  //                 House
  //               </label>
  //             </div>
  //             <div>
  //               <input
  //                 type="radio"
  //                 id="apartment"
  //                 name="houseType"
  //                 value="apartment"
  //                 required
  //                 data-test-id="adopt-me-form-question4-apartment"
  //                 onChange={(event) => setQuestionFour(event.currentTarget.value)}
  //               />
  //               <label htmlFor="apartment" className={styles['label']}>
  //                 Apartment
  //               </label>
  //             </div>
  //           </label>
  //           <br />
  //           <div className={styles['form-row']}>
  //             <label className={styles['label']} htmlFor="additionalRemarks">
  //               Additional remarks?
  //             </label>
  //             <input
  //               required
  //               placeholder="Additional remarks"
  //               data-test-id="adopt-me-form-question5"
  //               className={styles['input']}
  //               onChange={(event) =>
  //                 setAdditionalRemarks(event.currentTarget.value)
  //               }
  //             />
  //           </div>
  //           <br />
  //           <AdoptMeSubmitButton />
  //           {/* <button>Submit</button> */}
  //         </form>
  //       </div>
  //     </main>
  //   );
  // }

  return (
    <div>
      <h1 className={styles['text']}>Adopt Me Form</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await handleCreateAdoption();
        }}
      >
        <label>
          What's the name of the resident that you want to adopt?
          <input
            value={animalName}
            onChange={(event) => setAnimalName(event.currentTarget.value)}
          />
        </label>
        <br />
        <label>
          Which type do you want to adopt?
          <input
            value={questionOne}
            onChange={(event) => setQuestionOne(event.currentTarget.value)}
            placeholder="Cat or Dog"
          />
        </label>
        <br />
        <label>
          First Name:
          <input
            value={firstName}
            onChange={(event) => setFirstName(event.currentTarget.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            value={lastName}
            onChange={(event) => setLastName(event.currentTarget.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
        </label>
        <br />
        <label>
          Phone number:
          <input
            value={phone}
            onChange={(event) => setPhone(event.currentTarget.value)}
          />
        </label>
        <br />
        <label>
          Do you have a pet at home?
          <input
            value={questionTwo}
            onChange={(event) => setQuestionTwo(event.currentTarget.value)}
            placeholder="Yes or No"
          />
        </label>
        <br />
        <label>
          Do you have any experiences with cats/dogs?
          <input
            value={questionThree}
            onChange={(event) => setQuestionThree(event.currentTarget.value)}
            placeholder="Yes or No"
          />
        </label>
        <label>
          Do you live in a house or an apartment?
          <input
            value={questionFour}
            onChange={(event) => setQuestionFour(event.currentTarget.value)}
            placeholder="House or Apartment"
          />
        </label>
        <br />
        <br />
        <label>
          Additional remarks?
          <input
            value={additionalRemarks}
            onChange={(event) =>
              setAdditionalRemarks(event.currentTarget.value)
            }
          />
        </label>
        <br />
        <button>Post</button>
      </form>
    </div>
  );
}
