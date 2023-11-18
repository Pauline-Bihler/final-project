import { notFound } from 'next/navigation';
import { getDog } from '../../../database/dogs';
// import { getDog } from '../../../database/animals';
import { AdoptMeButton } from '../../cats/[catId]/AdoptMeButton';
import { ScheduleButton } from './ScheduleButton';

type GenerateMetadataProps = {
  params: {
    dogId: number;
  };
};

export function generateMetadata(props: GenerateMetadataProps) {
  const singleDog = getDog(Number(props.params.dogId));

  return {
    title: singleDog ? singleDog.name : '',
  };
}

export default function DogPage(props: GenerateMetadataProps) {
  const singleDog = getDog(Number(props.params.dogId));
  // console.log('check:', singleDog);

  if (!singleDog) {
    return notFound();
  }
  return (
    <div>
      <h1>{singleDog.name}</h1>
      <img
        src={`/images/${singleDog.name}.jpg`}
        alt={singleDog.name}
        width={250}
        height={350}
      />
      <p>{singleDog.description}</p>
      <ScheduleButton />
      <br />
      <AdoptMeButton />
    </div>
  );
}
