'use client';

import styles from './AdoptMeForm.module.scss';
import { AdoptMeSubmitButton } from './AdoptMeSubmitButton';

export default function AdoptMeForm() {
  return (
    <main>
      <div className={styles['overall-container']}>
        <h1 className={styles['text']}>Adopt Me Form</h1>
        <form className={styles['form']}>
          <div className={styles['form-row']}>
            <label className={styles['label']} htmlFor="firstName">
              First Name:
            </label>
            <input
              required
              placeholder="First Name"
              data-test-id="adopt-me-form-first-name"
              id="firstName"
              className={styles['input']}
            />
          </div>
          <div className={styles['form-row']}>
            <label className={styles['label']} htmlFor="lastName">
              Last Name:
            </label>
            <input
              required
              placeholder="Last Name"
              data-test-id="adopt-me-form-last-name"
              id="lastName"
              className={styles['input']}
            />
          </div>
          <div className={styles['form-row']}>
            <label className={styles['label']} htmlFor="lastName">
              E-Mail:
            </label>
            <input
              required
              placeholder="E-Mail:"
              data-test-id="adopt-me-form-email"
              id="email"
              className={styles['input']}
            />
          </div>
          <div className={styles['form-row']}>
            <label className={styles['label']} htmlFor="phoneNumber:">
              Phone number:
            </label>
            <input
              required
              placeholder="Phone number:"
              data-test-id="adopt-me-phone-number"
              id="phoneNumber"
              className={styles['input']}
            />
          </div>
          <label className={styles['label']}>
            Do you have a pet at home?
            <div>
              <input
                type="radio"
                id="yes"
                name="petAtHome"
                value="yes"
                required
                data-test-id="adopt-me-form-question1-yes"
              />
              <label htmlFor="yes" className={styles['label']}>
                Yes
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="no"
                name="petAtHome"
                value="no"
                required
                data-test-id="adopt-me-form-question1-no"
              />
              <label htmlFor="no" className={styles['label']}>
                No
              </label>
            </div>
          </label>
          <label className={styles['label']}>
            Do you have any experiences with cats/dogs?
            <div>
              <input
                type="radio"
                id="yes"
                name="experienceWithPets"
                value="yes"
                required
                data-test-id="adopt-me-form-question2-yes"
              />
              <label htmlFor="yes" className={styles['label']}>
                Yes
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="no"
                name="experienceWithPets"
                value="no"
                required
                data-test-id="adopt-me-form-question2-no"
              />
              <label htmlFor="no" className={styles['label']}>
                No
              </label>
            </div>
          </label>
          <br />
          <label className={styles['label']}>
            Do you live in a house or an apartment?
            <div>
              <input
                type="radio"
                id="house"
                name="houseType"
                value="house"
                required
                data-test-id="adopt-me-form-question3-house"
              />
              <label htmlFor="house" className={styles['label']}>
                House
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="apartment"
                name="houseType"
                value="apartment"
                required
                data-test-id="adopt-me-form-question3-apartment"
              />
              <label htmlFor="apartment" className={styles['label']}>
                Apartment
              </label>
            </div>
          </label>
          <div className={styles['form-row']}>
            <label className={styles['label']} htmlFor="apartmentSize">
              How big is your house/apartment?
            </label>
            <input
              required
              placeholder="sqm"
              data-test-id="adopt-me-form-question4"
              className={styles['input']}
            />
          </div>
          <div className={styles['form-row']}>
            <label className={styles['label']} htmlFor="additionalRemarks">
              Additional remarks?
            </label>
            <input
              required
              placeholder="Additional remarks"
              data-test-id="adopt-me-form-question5"
              className={styles['input']}
            />
          </div>
          <br />
          <AdoptMeSubmitButton />
        </form>
      </div>
    </main>
  );
}
