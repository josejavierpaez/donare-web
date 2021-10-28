import React, { useState, useEffect } from 'react';
import { DataContext } from './context/constext';
import { AppRouter } from './AppRouter';
import { DataFactory } from './data/DataFactory';
import {flagUs, flagSpain} from './assets/index';

export const App = () => {
  const [lenguage, setLenguage] = useState('en');
  const [dataDonare, setDataDonare] = useState({});
  const getLenguage = async () => {
    //check lenguage save it in local storage and set to state
    const lenguageSelected = localStorage.getItem('lenguage');
    if (lenguageSelected === 'en') {
      setLenguage('en');
    } else if (lenguageSelected === 'es') {
      setLenguage('es');
    }
  };

  //change language in local storage
  const changeLenguage = (lenguage) => {
    localStorage.setItem('lenguage', lenguage);
    setLenguage(lenguage);
  };

  useEffect(() => {
    getLenguage();
    const data = DataFactory.getData(lenguage);
    setDataDonare(data);
  }, [lenguage]);
  return (
    <DataContext.Provider value={dataDonare}>
      <div className='wrapper lenguage-section'>
        <button onClick={() => changeLenguage('en')}> <img src={flagUs} loading='lazy' /> </button>
        <button onClick={() => changeLenguage('es')}> <img src={flagSpain} loading='lazy' /> </button>
      </div>
      <AppRouter />
    </DataContext.Provider>
  );
};
