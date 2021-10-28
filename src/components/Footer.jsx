import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { DataContext } from '../context/constext';
import {
  facebookIcon,
  instagramIcon,
  locationIcon,
  mailIcon,
  phoneIcon,
  twitterIcon,
  footerLogo,
} from '../assets/index.js';

export const Footer = () => {
  const { footer } = useContext(DataContext);
  return (
    <footer>
      <div className='wrapper'>
        <div className='footer-img'>
          <img src={footerLogo} alt='' loading='lazy' />
        </div>

        <div className='footer-cont'>
          <div className='f1'>
            <div className='icon'>
              <img src={locationIcon} alt='' loading='lazy' />
            </div>
            <div className='location'>
              <p>{footer?.address}</p>
            </div>
          </div>

          <div className='f2'>
            <div className='number-cont'>
              <div className='icon'>
                <img src={phoneIcon} alt='' loading='lazy' />
              </div>
              <div className='number'>
                <p>+{footer?.number}</p>
              </div>
            </div>
            <div className='mail-cont'>
              <div className='icon'>
                <img src={mailIcon} alt='' loading='lazy' />
              </div>
              <div className='mail'>
                <p>{footer?.mail}</p>
              </div>
            </div>
          </div>

          <div className='f3'>
            <div>
              <NavLink to='/'>
                <p>{footer?.menu.home}</p>
              </NavLink>
              <NavLink to='/about'>
                <p>{footer?.menu.about}</p>
              </NavLink>
              <NavLink to='/contact'>
                <p>{footer?.menu.contact}</p>
              </NavLink>
            </div>
          </div>

          <div className='f4'>
            <div>
              <NavLink to='#'>
                <img src={facebookIcon} alt='' loading='lazy' />
              </NavLink>
            </div>
            <div>
              <NavLink to='#'>
                <img src={twitterIcon} alt='' loading='lazy' />
              </NavLink>
            </div>
            <div>
              <NavLink to='#'>
                <img src={instagramIcon} alt='' loading='lazy' />
              </NavLink>
            </div>
          </div>
        </div>

        <div className='footer-cont-tablet'>
          <div className='container-f1-f2'>
            <div className='f1'>
              <div className='icon'>
                <img src={locationIcon} alt='' loading='lazy' />
              </div>
              <div className='location'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur tristique, elit et eleifend finibus, metus diam
                  aliquet libero, nec scelerisque arcu metus vel mauris.{' '}
                </p>
              </div>
            </div>

            <div className='f2'>
              <div className='number-cont'>
                <div className='icon'>
                  <img src={phoneIcon} alt='' loading='lazy' />
                </div>
                <div className='number'>
                  <p>+1-555-032-4367</p>
                </div>
              </div>
              <div className='mail-cont'>
                <div className='icon'>
                  <img src={mailIcon} alt='' loading='lazy' />
                </div>
                <div className='mail'>
                  <p>example@donare.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className='container-f3-f4'>
            <div className='f3'>
              <div>
                <NavLink to='/'>
                  <p>Home</p>
                </NavLink>
                <NavLink to='/about'>
                  <p>About</p>
                </NavLink>
                <NavLink to='/contact'>
                  <p>Contact</p>
                </NavLink>
              </div>
            </div>

            <div className='f4'>
              <div>
                <NavLink to='#'>
                  <img src={facebookIcon} alt='' loading='lazy' />
                </NavLink>
              </div>
              <div>
                <NavLink to='#'>
                  <img src={twitterIcon} alt='' loading='lazy' />
                </NavLink>
              </div>
              <div>
                <NavLink to='#'>
                  <img src={instagramIcon} alt='' loading='lazy' />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
