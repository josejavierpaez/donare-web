import { loading } from '../assets/index';

export const Loading = () => {
  return (
    <>
      <div className="loading">
        <img src={loading} alt='loading' />
      </div>
    </>
  );
};
