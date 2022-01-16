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
