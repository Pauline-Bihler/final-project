import styles from './page.module.scss';

type Props = {
  params: { username: string };
};

export default function UserProfilePage({ params }: Props) {
  // console.log('Check:', params);
  return (
    <div className={styles['centeredContainer']}>
      <h1>You are currently logged-in</h1>
      <h2>{params.username}'s profile page</h2>
    </div>
  );
}
