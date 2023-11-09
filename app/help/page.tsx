import styles from './help.module.scss';

export const metadata = {
  title: 'Help us | Kitties & Doggies of Graz',
  description: 'Adopt & support animals in need',
};

export default function HelpPage() {
  return (
    <div>
      <h1> Help these animals in need ♥</h1>
      <div className={styles['help']}>
        <p>Every penny counts.</p>
      </div>
    </div>
  );
}
