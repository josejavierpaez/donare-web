import { useContext } from 'react';
import { DataContext } from '../context/constext';
import { Form } from '../components/Form';

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
          <Form />
        </section>
      </div>
    </>
  );
};
