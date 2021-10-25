import { photoExample } from '../assets/index.js';

import { Introduction } from '../components/Introduction';

export const AboutPage = () => {
  return (
    <>
      <section className='about-us'>
        <div className='wrapper'>
          <h1>About us</h1>
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

      <section className='objectives'>
        <div className='wrapper'>
          <div className='objectives-content'>
            <div className='objectives-img'>
              <img src={photoExample} alt='story' loading='lazy' />
            </div>

            <div className='objectives-paragraph'>
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
    </>
  );
};
