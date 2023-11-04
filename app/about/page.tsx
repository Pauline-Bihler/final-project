import styles from './about.module.scss';

export const metadata: Metadata = {
  title: 'About |',
  description: 'Adopt & support animals in need',
};

export default function AboutPage() {
  return (
    <div>
      <h1> Kitties & Doggos of Austria</h1>
      <div className={styles['about']}>
        <p>Thank you for dropping by our page.</p>
      </div>
    </div>
  );
}
