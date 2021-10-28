import { useContext } from 'react';
import { DataContext } from '../context/constext';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper';
import { carrousel1 } from '../assets';
import { Introduction } from '../components/Introduction';
import { circles, pig, gift, volunteer } from '../assets/index';
import { Link } from 'react-router-dom';
// install Swiper modules
SwiperCore.use([Navigation]);

export const HomePage = () => {
  const { homePage } = useContext(DataContext);
  return (
    <>
      <Swiper navigation={true} className='carrousel-container'>
        <SwiperSlide className='swiper-slide'>
          <img src={carrousel1} alt='carrousel' loading='lazy' />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img src={carrousel1} alt='carrousel' loading='lazy' />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img src={carrousel1} alt='carrousel' loading='lazy' />
        </SwiperSlide>
      </Swiper>

      <section>
        <div className='wrapper'>
          <div className='introduction'>
            <Introduction />
          </div>
        </div>
      </section>

      <section className='mision'>
        <h2>Lorem Ipsum</h2>

        <div className='image'>
          <img src={circles} alt='decoration' loading='lazy' />
        </div>

        <div className='wrapper'>
          <section className='mision-container'>
            <div className='mision'>
              <h2>{homePage?.mission.title}</h2>
              <p>{homePage?.mission.description}</p>
            </div>

            <div className='mision'>
              <h2>{homePage?.vision.title}</h2>
              <p>{homePage?.vision.description}</p>
            </div>

            <div className='mision'>
              <h2>{homePage?.values.title}</h2>
              <p>{homePage?.values.description}</p>
            </div>
          </section>
        </div>
      </section>

      <section className='donations-container'>
        <div className='wrapper'>
          <div className='donations-text'>
            <h2>{homePage?.donation.title}</h2>

            <p>{homePage?.donation.description}</p>
          </div>

          <section className='donations'>
            <div className='card'>
              <img src={pig} alt='svg' loading='lazy' />
              <h2>{homePage?.moneyCard.title}</h2>
              <p>{homePage?.moneyCard.description} </p>
              <Link to='#'>{homePage?.moneyCard.button}</Link>
            </div>

            <div className='card'>
              <img src={gift} alt='svg' loading='lazy' />
              <h2>{homePage?.boxCard.title}</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <Link to='#'>{homePage?.boxCard.button}</Link>
            </div>
          </section>
        </div>
      </section>

      <section className='volunteer-container'>
        <div className='wrapper'>
          <div className='volunteer'>
            <div className='volunteer-text'>
              <h2>{homePage?.becomeVolunteer.title}</h2>
            </div>

            <div className='volunteer-img'>
              <img src={volunteer} alt='volunteer' loading='lazy' />
            </div>
          </div>

          <div className='become-volunteer'>
            <Link to='#'>{homePage?.becomeVolunteer.button}</Link>
          </div>
        </div>
      </section>
    </>
  );
};
