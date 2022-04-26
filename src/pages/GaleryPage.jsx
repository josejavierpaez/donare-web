import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../context/constext';
import { CardImage } from '../components/CardImage';
import { Loading } from '../components/Loading';
import {
  galery1,
  galery2,
  galery3,
  galery4,
  galery5,
  galery6,
  galery7,
  galery8,
  galery9,
  galery10,
  galery11,
  galery12,
  galery13,
  galery14,
  galery15,
  galery16,
  galery17,
  galery18,
  galery19,
  galery20,
  galery21,
  galery22,
  galery23,
  galery24,
  galery25,
  galery26,
  galery27,
  galery28,
  galery29,
  galery30,
  carrousel2,
  carrousel3,
  photoStory,
  photoObjectives,
} from '../assets/index';

export const GaleryPage = () => {
  const { galeryPage } = useContext(DataContext);
  const [loading, setLoading] = useState(true);
  const imagesGalery = [
    {
      image: galery30,
      alt: 'Galery Image',
    },
    {
      image: galery29,
      alt: 'Galery Image',
    },
    {
      image: galery28,
      alt: 'Galery Image',
    },
    {
      image: galery27,
      alt: 'Galery Image',
    },
    {
      image: galery26,
      alt: 'Galery Image',
    },
    {
      image: galery25,
      alt: 'Galery Image',
    },
    {
      image: galery24,
      alt: 'Galery Image',
    },
    {
      image: galery23,
      alt: 'Galery Image',
    },
    {
      image: galery22,
      alt: 'Galery Image',
    },
    {
      image: galery21,
      alt: 'Galery Image',
    },
    {
      image: galery20,
      alt: 'Galery Image',
    },
    {
      image: galery19,
      alt: 'Galery Image',
    },
    {
      image: galery18,
      alt: 'Galery Image',
    },
    {
      image: galery17,
      alt: 'Galery Image',
    },
    {
      image: galery16,
      alt: 'Galery Image',
    },
    {
      image: galery15,
      alt: 'Galery Image',
    },
    {
      image: galery14,
      alt: 'Galery Image',
    },
    {
      image: galery13,
      alt: 'Galery Image',
    },
    {
      image: galery12,
      alt: 'Galery Image',
    },
    {
      image: galery11,
      alt: 'Galery Image',
    },
    {
      image: galery10,
      alt: 'Galery Image',
    },
    {
      image: galery9,
      alt: 'Galery Image',
    },
    {
      image: galery8,
      alt: 'Galery Image',
    },
    {
      image: galery1,
      alt: 'Galery Image',
    },
    {
      image: galery2,
      alt: 'Galery Image',
    },
    {
      image: galery3,
      alt: 'Galery Image',
    },
    {
      image: galery4,
      alt: 'Galery Image',
    },
    {
      image: galery5,
      alt: 'Galery Image',
    },
    {
      image: galery6,
      alt: 'Galery Image',
    },
    {
      image: galery7,
      alt: 'Galery Image',
    },
    {
      image: carrousel2,
      alt: 'Galery Image',
    },
    {
      image: carrousel3,
      alt: 'Galery Image',
    },
    {
      image: photoObjectives,
      alt: 'Galery Image',
    },
    {
      image: photoStory,
      alt: 'Galery Image',
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading && <Loading />}
      <div className="wrapper galery-title">
      <h2>{galeryPage?.title}</h2>
      </div>
      <div className='wrapper galery'>
        {imagesGalery.map((imageGalery, index) => (
          <CardImage key={index} imageGalery={imageGalery} />
        ))}
      </div>
    </>
  );
};
