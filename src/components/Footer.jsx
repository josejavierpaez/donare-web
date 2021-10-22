import { NavLink } from 'react-router-dom';
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
  return (
    <footer>
      <div class='wrapper'>
        <div class='footer-img'>
          <img src={footerLogo} alt='' loading='lazy' />
        </div>

        <div class='footer-cont'>
          <div class='f1'>
            <div class='icon'>
              <img src={locationIcon} alt='' loading='lazy' />
            </div>
            <div class='location'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur tristique, elit et eleifend finibus, metus diam
                aliquet libero, nec scelerisque arcu metus vel mauris.{' '}
              </p>
            </div>
          </div>

          <div class='f2'>
            <div class='number-cont'>
              <div class='icon'>
                <img src={phoneIcon} alt='' loading='lazy' />
              </div>
              <div class='number'>
                <p>+1-555-032-4367</p>
              </div>
            </div>
            <div class='mail-cont'>
              <div class='icon'>
                <img src={mailIcon} alt='' loading='lazy' />
              </div>
              <div class='mail'>
                <p>example@donare.com</p>
              </div>
            </div>
          </div>

          <div class='f3'>
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

          <div class='f4'>
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

        <div class='footer-cont-tablet'>
          <div className='container-f1-f2'>
            <div class='f1'>
              <div class='icon'>
                <img src={locationIcon} alt='' loading='lazy' />
              </div>
              <div class='location'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur tristique, elit et eleifend finibus, metus diam
                  aliquet libero, nec scelerisque arcu metus vel mauris.{' '}
                </p>
              </div>
            </div>

            <div class='f2'>
              <div class='number-cont'>
                <div class='icon'>
                  <img src={phoneIcon} alt='' loading='lazy' />
                </div>
                <div class='number'>
                  <p>+1-555-032-4367</p>
                </div>
              </div>
              <div class='mail-cont'>
                <div class='icon'>
                  <img src={mailIcon} alt='' loading='lazy' />
                </div>
                <div class='mail'>
                  <p>example@donare.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className='container-f3-f4'>
            <div class='f3'>
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

            <div class='f4'>
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
