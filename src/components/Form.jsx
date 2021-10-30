import { useContext } from 'react';
import { DataContext } from '../context/constext';
import { locationIcon, mailIcon, phoneIcon } from '../assets/index';
export const Form = () => {
  const { form } = useContext(DataContext);
  return (
    <>
      <div className='contact-card'>
        <h2>
          {form?.form.title.contact}{' '}
          <span>{form?.form.title.info} </span>
        </h2>
        <p>{form?.description}</p>
        <div>
          <img src={phoneIcon} alt='icon' />
          <p>+{form?.number}</p>
        </div>
        <div>
          <img src={mailIcon} alt='icon' />
          <p>{form?.mail}</p>
        </div>
        <div>
          <img src={locationIcon} alt='icon' />
          <p>{form?.address}</p>
        </div>
      </div>
      <form className='form'>
        <div className='first-last-name'>
          <div>
            <div>
              <label>{form?.form.firstName}</label>
              <input type='text' />
            </div>
          </div>

          <div>
            <div>
              <label>{form?.form.lastName}</label>
              <input type='text' />
            </div>
          </div>
        </div>

        <div className='mail-phone'>
          <div className='mail'>
            <div>
              <label>{form?.form.mail}</label>
              <input type='email' />
            </div>
          </div>
          <div className='phone'>
            <div>
              <label>{form?.form.phone}</label>
              <input type='text' />
            </div>
          </div>
        </div>

        <div className='message'>
          <label>{form?.form.message}</label>
          <textarea></textarea>
        </div>

        <div className='submit'>
          <a href='#'>{form?.form.buttonSubmit}</a>
        </div>
      </form>
    </>
  );
};
