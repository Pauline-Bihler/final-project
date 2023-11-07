'use client';

import { AdoptMeSubmitButton } from './AdoptMeSubmitButton';

export default function AdoptMeForm() {
  return (
    <main>
      <br />

      <form>
        <label>
          First Name:
          <input
            required
            placeholder="First Name"
            data-test-id="adopt-me-form-first-name"
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            required
            placeholder="Last Name"
            data-test-id="adopt-me-form-last-name"
          />
        </label>
        <br />
        <label>
          E-Mail:
          <input
            required
            placeholder="Email"
            type="email"
            data-test-id="adopt-me-form-email"
          />
        </label>
        <br />
        <label>
          Phone number:
          <input
            required
            placeholder="phone number"
            data-test-id="adopt-me-phone-number"
          />
        </label>
        <br />
        <label>
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
            <label htmlFor="yes">Yes</label>
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
            <label htmlFor="no">No</label>
          </div>
        </label>
        <br />
        <label>
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
            <label htmlFor="yes">Yes</label>
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
            <label htmlFor="no">No</label>
          </div>
        </label>
        <br />
        <label>
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
            <label htmlFor="house">House</label>
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
            <label htmlFor="apartment">Apartment</label>
          </div>
        </label>
        <br />
        <label>
          How big is your house/apartment?
          <input
            required
            placeholder="sqm"
            data-test-id="adopt-me-form-question4"
          />
        </label>
        <br />
        <label>
          Additional remarks
          <input
            required
            placeholder="Additional remarks"
            data-test-id="adopt-me-form-question5"
          />
        </label>
        <br />
        <AdoptMeSubmitButton />
      </form>
    </main>
  );
}
