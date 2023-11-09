import AdoptMeForm from './AdoptMeForm';

export const metadata = {
  title: 'Adopt Me Form |Kitties & Doggies of Graz',
  description: 'Adopt & support animals in need',
};

export default function AdoptMePage() {
  return (
    <div>
      <h1>Adopt Me Form </h1>
      <AdoptMeForm />
    </div>
  );
}
