import styles from './page.module.scss';

export const metadata = {
  title: 'Take me out for a walk Form |Kitties & Doggos of Austria',
  description: 'Adopt & support animals in need',
};

export default function SchedulePage() {
  return (
    <div className={styles['text-container']}>
      <div>
        <h1 className={styles['text']}>Discover Your Future Furry Friend</h1>
        <h2 className={styles['text']}>
          Schedule a Meetup, Connect, and
          <br />
          Begin Your Adoption Journey Today!
        </h2>
        <p className={styles['text']}>
          Schedule a personalized meetup with the animals you connect with most,
          providing an opportunity for mutual understanding and a chance to
          build a lasting bond. Take your time getting to know each prospective
          pet, and if you find that special connection, proceed to complete the
          adoption form to welcome your new friend into your loving home. Begin
          this rewarding adventure with us, where every interaction is a step
          toward creating a forever home for these wonderful animals.
        </p>
      </div>

      <div>
        <form>
          <label>
            Please enter the day you want to visit:
            <input placeholder="Monday-Saturday" />
          </label>
          <br />
          <label>
            Please enter the time you want to visit:
            <input placeholder="9:00 pm - 5:00 pm" />
          </label>
        </form>
      </div>
    </div>
  );
}
