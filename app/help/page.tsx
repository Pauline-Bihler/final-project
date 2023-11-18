import styles from './help.module.scss';

export const metadata = {
  title: 'Help us | Kitties & Doggies of Graz',
  description: 'Adopt & support animals in need',
};

export default function HelpPage() {
  return (
    <div className={styles['help-container']}>
      <h1>Thank you for your inquiry ♥</h1>
      <p>
        We truly appreciate your interest in adopting a furry friend from
        Kitties & Doggies of Graz! Your inquiry has been received, and our
        dedicated team will reach out to you soon to provide more information
        and guide you through the next steps of the adoption process.
      </p>
      <p>
        In the meantime, if you have any immediate questions or concerns, feel
        free to contact us:
      </p>
      <div className={styles['contact-info']}>
        <p>
          Email:{' '}
          <a href="mailto:animalsofgraz@yahoo.com">animalsofgraz@yahoo.com</a>
        </p>
        <p>Phone: +43 123 4567 890</p>
      </div>
      <p>
        Your support means the world to us. Every penny counts in helping these
        animals in need. If you'd like to contribute to our cause, you can make
        a donation on our website. Your generosity goes a long way in providing
        care, shelter, and love to animals awaiting their forever homes.
      </p>
      <p>Thank you for being a part of our mission!</p>
    </div>
  );
}
