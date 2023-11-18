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

  return (
    <div className={styles['overall-container']}>
      <h1 className={styles['text']}>Adopt Me Form</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await handleCreateAdoption();
        }}
        className={styles['form']}
      >
        <div className={styles['form-row']}>
          <label className={styles['label']}>
            What's the name of the resident that you want to adopt?
            <input
              value={animalName}
              onChange={(event) => setAnimalName(event.currentTarget.value)}
              className={styles['input']}
              placeholder="Resident name"
            />
          </label>
        </div>
        <label className={styles['label']}>
          Which type do you want to adopt?
          <input
            value={questionOne}
            onChange={(event) => setQuestionOne(event.currentTarget.value)}
            placeholder="Cat or Dog"
            className={styles['input']}
          />
        </label>
        <label className={styles['label']}>
          First Name:
          <input
            value={firstName}
            onChange={(event) => setFirstName(event.currentTarget.value)}
            className={styles['input']}
            placeholder="First name"
          />
        </label>
        <label className={styles['label']}>
          Last Name:
          <input
            value={lastName}
            onChange={(event) => setLastName(event.currentTarget.value)}
            className={styles['input']}
            placeholder="Last name"
          />
        </label>
        <label className={styles['label']}>
          Email:
          <input
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
            className={styles['input']}
            placeholder="Email"
          />
        </label>
        <label className={styles['label']}>
          Phone number:
          <input
            value={phone}
            onChange={(event) => setPhone(event.currentTarget.value)}
            className={styles['input']}
            placeholder="Phone number"
          />
        </label>
        <label className={styles['label']}>
          Do you have a pet at home?
          <input
            value={questionTwo}
            onChange={(event) => setQuestionTwo(event.currentTarget.value)}
            placeholder="Yes or No"
            className={styles['input']}
          />
        </label>
        <label className={styles['label']}>
          Do you have any experiences with cats/dogs?
          <input
            value={questionThree}
            onChange={(event) => setQuestionThree(event.currentTarget.value)}
            placeholder="Yes or No"
            className={styles['input']}
          />
        </label>
        <label className={styles['label']}>
          Do you live in a house or an apartment?
          <input
            value={questionFour}
            onChange={(event) => setQuestionFour(event.currentTarget.value)}
            placeholder="House or Apartment"
            className={styles['input']}
          />
        </label>
        <label className={styles['label']}>
          Additional remarks?
          <input
            value={additionalRemarks}
            onChange={(event) =>
              setAdditionalRemarks(event.currentTarget.value)
            }
            placeholder="Additional remarks"
            className={styles['input']}
          />
        </label>
        <br />
        {/* <AdoptMeSubmitButton /> */}
        <button>Submit</button>
      </form>
    </div>
  );
}
