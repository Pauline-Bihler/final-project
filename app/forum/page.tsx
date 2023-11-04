import styles from './forum.module.scss';

export const metadata = {
  title: 'Forum |',
  description:
    'Your resident manga merch dealer. All goodies are authentic and from Japan.',
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
