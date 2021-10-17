import { footerLogo } from '../assets/index.js';

export const NavBar = () => {
  return (
    <header>
      <div class='wrapper'>
        <nav>
          <div class='logo'>
            <img src={footerLogo} alt='Donare logo' loading='lazy' />
          </div>

          <div class='nav-bar'>
            <div class='navs'>
              <a href='#'>Home</a>
              <a href='#' class='active'>
                About us
              </a>
              <a href='#'>Galery</a>
              <a href='#'>Contact</a>
            </div>

            <div class='navs-2'>
              <a href='#' class='donate-button'>
                Donate
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
