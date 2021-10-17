import { photoExample } from '../assets/index.js';

import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { Introduction } from '../components/Introduction';

export const AboutPage = () => {
  return (
    <>
      <NavBar />

      <section class='about-us'>
        <div class='wrapper'>
          <h1>About us</h1>

          <Introduction />

        </div>
      </section>

      <section class='div-gradient story'>
        <div class='wrapper'>
          <div class='story-content'>
            <div class='story-img'>
              <img src={photoExample} alt='story' loading='lazy' />
            </div>
            <div class='story-paragraph'>
              <h2>
                Our <span>story</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                interdum, nunc vitae blandit iaculis, odio nisl aliquam nisi,
                eget dictum neque nulla vel odio. Mauris commodo facilisis mi.
                Nunc sed suscipit dolor. Vestibulum eros purus, commodo in
                lectus fermentum, tincidunt lobortis justo. Fusce bibendum sed
                leo nec ullamcorper.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class='objectives'>
        <div class='wrapper'>
          <div className='objective-content'>
            <div class='objectives-img'>
              <img src={photoExample} alt='story' loading='lazy' />
            </div>

            <div class='objectives-paragraph'>
              <h2>
                Our <span>objectives</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                interdum, nunc vitae blandit iaculis, odio nisl aliquam nisi,
                eget dictum neque nulla vel odio. Mauris commodo facilisis mi.
                Nunc sed suscipit dolor. Vestibulum eros purus, commodo in
                lectus fermentum, tincidunt lobortis justo. Fusce bibendum sed
                leo nec ullamcorper.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
