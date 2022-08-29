import { useContext } from 'react';
import ThemeContext from '../store/context/theme-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <header>
      <h2>Oskar Czerw</h2>
      <div className={'theme-switch'} onClick={changeTheme}>
        <i id='theme-switch__indicator'>
          <FontAwesomeIcon
            className='theme-switch__indicator__icon'
            icon={theme === 'dark' ? faMoon : faSun}
          />
        </i>
      </div>
    </header>
  );
};
export default Header;
