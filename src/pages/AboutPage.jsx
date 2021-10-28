import { useContext } from 'react';
import { DataContext } from '../context/constext';
import { photoExample } from '../assets/index.js';

import { Introduction } from '../components/Introduction';

export const AboutPage = () => {
  const { aboutPage } = useContext(DataContext);

  return (
    <>
      <section className='about-us'>
        <div className='wrapper'>
          <h1>{aboutPage?.title}</h1>
          <Introduction />
        </div>
      </section>

      <section className='div-gradient story'>
        <div className='wrapper'>
          <div className='story-content'>
            <div className='story-img'>
              <img src={photoExample} alt='story' loading='lazy' />
            </div>
            <div className='story-paragraph'>
              <h2>
                {aboutPage?.story.title.our}{' '}
                <span>{aboutPage?.story.title.story}</span>
              </h2>
              <p>{aboutPage?.story.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className='objectives'>
        <div className='wrapper'>
          <div className='objectives-content'>
            <div className='objectives-img'>
              <img src={photoExample} alt='story' loading='lazy' />
            </div>

            <div className='objectives-paragraph'>
              <h2>
                {aboutPage?.objective.title.our}{' '}
                <span>{aboutPage?.objective.title.objective}</span>
              </h2>
              <p>{aboutPage?.objective.description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
