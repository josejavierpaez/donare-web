import logo from '../assets/img/Logo-CS.png';
import buildLogo from '../assets/svg/build.png';

export const ComingSoon = () => {
  return (
    <div className='container'>
      <img
        className='buildLogo'
        src={buildLogo}
        alt='Donare Build'
        loading='lazy'
      />
      <img className='donareLogo' src={logo} alt='Donare Logo' loading='lazy' />
      <p>Time to start giving</p>
      <h1>Comming Soon</h1>
    </div>
  );
};
