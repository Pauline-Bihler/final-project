import styles from './forum.module.scss';

export const metadata = {
  title: 'Forum | Kitties & Doggies of Graz',
  description: 'Adopt & support animals in need',
};

export default function ForumPage() {
  return (
    <div>
      <h1> You got some tips or stories to other fellow pet parents? ♥</h1>
      <div className={styles['help']}>
        <p>Feel free to voice out your thoughts here.</p>
      </div>
    </div>
  );
}
