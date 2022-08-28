import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  const [theme, setTheme] = useState('dark');

  const changeThemeHandler = () => {
    setTheme((prevState) => {
      if (prevState === 'dark') return 'light';
      else return 'dark';
    });
  };

  return (
    <header>
      <h2>Oskar Czerw</h2>
      <div
        className={
          theme === 'dark' ? 'theme-switch--dark' : 'theme-switch--light'
        }
        onClick={changeThemeHandler}>
        <i id='theme-switch__indicator'>
          <FontAwesomeIcon icon={theme === 'dark' ? faMoon : faSun} />
        </i>
      </div>
    </header>
  );
};
export default Header;
