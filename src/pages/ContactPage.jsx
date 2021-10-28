import { useContext } from 'react';
import { DataContext } from '../context/constext';
import { locationIcon, mailIcon, phoneIcon } from '../assets/index';

export const ContactPage = () => {
  const { contactPage } = useContext(DataContext);
  return (
    <>
      <div className='wrapper'>
        <div className='contact-title'>
          <h2>{contactPage?.title}</h2>
          <p>{contactPage?.question}</p>
        </div>
      </div>

      <div className='wrapper'>
        <section className='contact-section'>
          <div className='contact-card'>
            <h2>
              {contactPage?.form.title.contact}{' '}
              <span>{contactPage?.form.title.info} </span>
            </h2>
            <p>{contactPage?.description}</p>
            <div>
              <img src={phoneIcon} alt='' />
              <p>+{contactPage?.number}</p>
            </div>
            <div>
              <img src={mailIcon} alt='' />
              <p>{contactPage?.mail}</p>
            </div>
            <div>
              <img src={locationIcon} alt='' />
              <p>{contactPage?.address}</p>
            </div>
          </div>

          <div className='form'>
            <div className='first-last-name'>
              <div>
                <div>
                  <label>{contactPage?.form.firstName}</label>
                  <input type='text' />
                </div>
              </div>

              <div>
                <div>
                  <label>{contactPage?.form.lastName}</label>
                  <input type='text' />
                </div>
              </div>
            </div>

            <div className='mail-phone'>
              <div className='mail'>
                <div>
                  <label>{contactPage?.form.mail}</label>
                  <input type='email' />
                </div>
              </div>
              <div className='phone'>
                <div>
                  <label>{contactPage?.form.phone}</label>
                  <input type='text' />
                </div>
              </div>
            </div>

            <div className='message'>
              <label>{contactPage?.form.message}</label>
              <textarea></textarea>
            </div>

            <div className='submit'>
              <a href='#'>{contactPage?.form.buttonSubmit}</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
