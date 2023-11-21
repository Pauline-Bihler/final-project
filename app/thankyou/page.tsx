import styles from './page.module.scss';

export const metadata = {
  title: 'Thank you | Kitties & Doggies of Austria',
  description: 'Adopt & support animals in need',
};

export default function ThankyouPage() {
  return (
    <div className={styles['centeredContainer']}>
      <h1>Thank you for your inquiry 🐾</h1>
      <p className={styles['text']}>
        We truly appreciate your interest in adopting a furry friend from
        Kitties & Doggies of Graz!
        <br />
        Your inquiry has been received, and our dedicated team will reach out to
        you soon to provide more information and guide you through the next
        steps of the adoption process.
      </p>
      <p className={styles['text']}>
        In the meantime, feel free to explore more about our organization and
        the wonderful animals awaiting their forever homes on our website. If
        you have any immediate questions or concerns, don't hesitate to contact
        us directly.
        <br />
        <br />
        We look forward to helping you find the perfect companion to welcome
        into your home.
      </p>
      <br />
    </div>
  );
}
