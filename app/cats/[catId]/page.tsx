import { notFound } from 'next/navigation';
import { getCat } from '../../../database/cats';
import { AdoptMeButton } from './AdoptMeButton';

type GenerateMetadataProps = {
  params: {
    catId: number;
  };
};

export function generateMetadata(props: GenerateMetadataProps) {
  const singleCat = getCat(Number(props.params.catId));

  return {
    title: singleCat ? singleCat.name : '',
  };
}

export default function CatPage(props: GenerateMetadataProps) {
  const singleCat = getCat(Number(props.params.catId));
  // console.log('check:', singleCat);

  if (!singleCat) {
    return notFound();
  }
  return (
    <div>
      This is a single cat page
      <h1>{singleCat.name}</h1>
      <img
        src={`/images/${singleCat.name}.jpg`}
        alt={singleCat.name}
        width={250}
        height={350}
      />
      <AdoptMeButton />
    </div>
  );
}
