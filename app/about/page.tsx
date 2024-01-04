import { Metadata } from 'next';
import styles from './about.module.scss';

export const metadata: Metadata = {
  title: 'About | Kitties & Doggies of Graz',
  description: 'Adopt & support animals in need',
};

export default function AboutPage() {
  return (
    <div className={styles.about}>
      <h1>Kitties & Doggies of Graz</h1>
      <p>Thank you for dropping by our page.</p>

      <h2>About Us</h2>
      <p>
        Welcome to Kitties & Doggies of Graz, located in the heart of Graz,
        Austria.
      </p>

      <h2>Our Story</h2>
      <p>
        Founded by Pauline and Gregor, Kitties & Doggies of Graz is more than
        just an animal shelter—it's a labor of love inspired by our very own
        furry friend, Mimi. Mimi, a beloved cat adopted from an animal shelter,
        ignited a passion within us to make a difference in the lives of animals
        in need.
      </p>

      <h2>Why Choose Kitties & Doggies of Graz:</h2>
      <p>
        Every animal at our shelter is treated with the utmost care and
        compassion.
      </p>

      <h2>Quality Care:</h2>
      <p>
        We prioritize the health and well-being of our furry residents, ensuring
        they receive the best possible care.
      </p>

      <h2>Community Involvement:</h2>
      <p>
        We actively engage with the community to raise awareness about
        responsible pet ownership and the joy of adopting.
      </p>

      <p>
        Contact Us If you're looking for a new companion or have any questions,
        we'd love to hear from you. Contact us, and let's make a difference in
        the lives of animals together. Thank you for considering Kitties &
        Doggies of Graz as your partner in pet adoption.
      </p>
    </div>
  );
}
