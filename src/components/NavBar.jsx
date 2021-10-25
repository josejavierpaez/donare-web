import { NavLink } from 'react-router-dom';
import { footerLogo, btnResponsive } from '../assets/index.js';

export const NavBar = () => {
  const handleChecked = () => {
    const body = document.querySelector('body');
    const check = document.querySelector('.navResponsive');
    const carrousel = document.querySelector('.carrousel-container');
    check.classList.toggle('show');
    body.classList.toggle('fix');
    carrousel?.classList?.toggle('show-carrousel');
  };

  const handleUncheck = () => {
    const body = document.querySelector('body');
    const check = document.querySelector('.navResponsive');
    const carrousel = document.querySelector('.carrousel-container');
    check.classList.remove('show');
    body.classList.remove('fix');
    carrousel?.classList?.remove('show-carrousel');

  };
  return (
    <header>
      <div className='wrapper'>
        <nav>
          <div className='logo'>
            <img src={footerLogo} alt='Donare logo' loading='lazy' />
          </div>

          <div className='butom'>
            <input type='checkbox' onClick={handleChecked} id='check' />
            <label htmlFor='check'>
              <i>
                <img src={btnResponsive} alt='' />
              </i>
            </label>
          </div>

          <div className='nav-bar'>
            <div className='navs'>
              <NavLink exact activeClassName='active' to='/'>
                Home
              </NavLink>
              <NavLink to='/about' activeClassName='active'>
                About us
              </NavLink>
              <NavLink exact to='/contact' activeClassName='active'>
                Contact
              </NavLink>
            </div>

            <div className='navs-2'>
              <NavLink exact to='#' className='donate-button'>
                Donate
              </NavLink>
            </div>
          </div>
        </nav>

        <div className='navResponsive'>
          <ul>
            <li>
              <NavLink
                onClick={handleUncheck}
                exact
                activeClassName='active'
                to='/'
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleUncheck}
                exact
                to='/about'
                activeClassName='active'
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleUncheck}
                exact
                to='/contact'
                activeClassName='active'
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
