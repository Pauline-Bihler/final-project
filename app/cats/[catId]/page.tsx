import { notFound } from 'next/navigation';
import { getCat } from '../../../database/cats';
import { ScheduleButton } from '../../dogs/[dogId]/ScheduleButton';
import { AdoptMeButton } from './AdoptMeButton';
import styles from './page.module.scss';

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
    <div className={styles['cat-page-container']}>
      <h1>{singleCat.name}</h1>
      <div className={styles['cat-content']}>
        <img
          src={`/images/${singleCat.name}.jpg`}
          alt={singleCat.name}
          width={250}
          height={350}
          className={styles['cat-image']}
        />
        <div className={styles['cat-details']}>
          <p>{singleCat.description}</p>
          <br />
          <ScheduleButton />
          <br />
          <AdoptMeButton />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
