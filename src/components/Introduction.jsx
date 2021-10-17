import { presentationLogo } from '../assets/index.js';

export const Introduction = () => {
  return (
    <div class='cont-intro'>
      <div class='introduction'>
        <div>
          <h2>Hi, we are Donare!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu{' '}
          </p>
        </div>
      </div>

      <div class='logo-2'>
        <div>
          <img src={presentationLogo} alt="Donare's logo" loading='lazy' />
        </div>
      </div>
    </div>
  );
};
