import { useContext } from 'react';
import { DataContext } from '../context/constext';
import { presentationLogo } from '../assets/index.js';

export const Introduction = () => {
  const { introduction } = useContext(DataContext);
  return (
    <div className='cont-intro home'>
      <div className='introduction'>
        <div>
          <h2>{introduction?.title}</h2>
          <p>{introduction?.description}</p>
        </div>
      </div>

      <div className='logo-2'>
        <div>
          <img src={presentationLogo} alt="Donare's logo" loading='lazy' />
        </div>
      </div>
    </div>
  );
};
