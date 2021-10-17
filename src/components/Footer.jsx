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
              <a href='#'>
                <p>About us</p>
              </a>
              <a href='#'>
                <p>News and Events</p>
              </a>
              <a href='#'>
                <p>Contact</p>
              </a>
            </div>
          </div>

          <div class='f4'>
            <div>
              <a href='#'>
                <img src={facebookIcon} alt='' loading='lazy' />
              </a>
            </div>
            <div>
              <a href='#'>
                <img src={twitterIcon} alt='' loading='lazy' />
              </a>
            </div>
            <div>
              <a href='#'>
                <img src={instagramIcon} alt='' loading='lazy' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
