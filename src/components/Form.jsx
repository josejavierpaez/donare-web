import { useContext } from 'react';
import { DataContext } from '../context/constext';
import { useForm, ValidationError } from '@formspree/react';
import { locationIcon, mailIcon, phoneIcon } from '../assets/index';
import { Alert } from './Alert';
export const Form = () => {
  const { form } = useContext(DataContext);
  const [state, handleSubmit] = useForm('contactForm');
  if (state.succeeded) {
    return (
      <Alert
        title={form.form.alert.title}
        body={form.form.alert.body}
        type='success'
      />
    );
  }

  return (
    <>
      <div className='contact-card'>
        <h2>
          {form?.form.title.contact} <span>{form?.form.title.info} </span>
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

      <form className='form' onSubmit={handleSubmit}>
        <div className='first-last-name'>
          <div>
            <div>
              <label>{form?.form.firstName}</label>
              <input id='firstName' type='text' name='firstName' />
              <ValidationError
                className='error'
                prefix='FirstName'
                field='firstName'
                errors={state.errors}
              />
            </div>
          </div>

          <div>
            <div>
              <label>{form?.form.lastName}</label>
              <input id='lastName' type='text' name='lastName' />
              <ValidationError
                className='error'
                prefix='LastName'
                field='lastName'
                errors={state.errors}
              />
            </div>
          </div>
        </div>

        <div className='mail-phone'>
          <div className='mail'>
            <div>
              <label>{form?.form.mail}</label>
              <input id='mail' type='email' name='mail' />
              <ValidationError
                className='error'
                prefix='Mail'
                field='mail'
                errors={state.errors}
              />
            </div>
          </div>
          <div className='phone'>
            <div>
              <label>{form?.form.phone}</label>
              <input id='phoneNumber' type='text' name='phoneNumber' />
              <ValidationError
                className='error'
                prefix='PhoneNumber'
                field='phoneNumber'
                errors={state.errors}
              />
            </div>
          </div>
        </div>

        <div className='message'>
          <label>{form?.form.message}</label>
          <textarea id='message' name='message'></textarea>
          <ValidationError
            className='error'
            prefix='Message'
            field='message'
            errors={state.errors}
          />
        </div>

        <div className='submit'>
          <button href='#' disabled={state.submitting}>
            {form?.form.buttonSubmit}
          </button>
        </div>
      </form>
    </>
  );
};
