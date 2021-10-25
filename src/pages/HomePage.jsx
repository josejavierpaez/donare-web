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
import {Link} from 'react-router-dom';
// install Swiper modules
SwiperCore.use([Navigation]);

export const HomePage = () => {
  // install Swiper modules
  return (
    <>
      <Swiper navigation={true} className='carrousel-container'>
        <SwiperSlide className='swiper-slide'>
          <img src={carrousel1} alt='carrousel' loading='lazy' />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img src={carrousel1} alt='carrousel'  loading='lazy' />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img src={carrousel1} alt='carrousel'  loading='lazy' />
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
          <img src={circles} alt='decoration'  loading='lazy' />
        </div>

        <div className='wrapper'>
          <section className='mision-container'>
            <div className='mision'>
              <h2>Lorem Ipsum dolor</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu{' '}
              </p>
            </div>

            <div className='mision'>
              <h2>Lorem Ipsum dolor</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu{' '}
              </p>
            </div>

            <div className='mision'>
              <h2>Lorem Ipsum dolor</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu{' '}
              </p>
            </div>
          </section>
        </div>
      </section>

      <section className='donations-container'>
        <div className='wrapper'>
          <div className='donations-text'>
            <h2>Would you like to help?</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              fermentum dolor sit amet dolor accumsan venenatis. Quisque
              vulputate, felis et auctor congue, lectus elit condimentum felis,
              eu semper turpis ipsum eu justo.{' '}
            </p>
          </div>

          <section className='donations'>
            <div className='card'>
              <img src={pig} alt='svg'  loading='lazy' />
              <h2>Donate with us!</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <Link to='#'>Donate</Link>
            </div>

            <div className='card'>
              <img src={gift} alt='svg'  loading='lazy' />
              <h2>Donate with us!</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <Link to='#'>Donate</Link>
            </div>
          </section>
        </div>
      </section>

      <section className='volunteer-container'>
        <div className='wrapper'>
          <div className='volunteer'>
            <div className='volunteer-text'>
              <h2>Together we can change lives </h2>
            </div>

            <div className='volunteer-img'>
              <img src={volunteer} alt='volunteer'  loading='lazy' />
            </div>
          </div>

          <div className='become-volunteer'>
            <Link to='#'>Become Link volunteer</Link>
          </div>
        </div>
      </section>
    </>
  );
};
