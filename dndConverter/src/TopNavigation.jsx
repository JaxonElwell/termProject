import React from 'react';
import { FaSun, FaMoon, FaSearch, FaRegBell, FaUserCircle } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import useDarkMode from './Hooks/useDarkMode';

const TopNavigation = () => {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Home';
      case '/add':
        return 'Add A Creature';
      case '/profile':
        return 'Profile';
      default:
        case '/collection':
        return 'Creature Collection';
        return 'DnD 5e to Pf2e';
    }
  };

  const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
      <span onClick={handleMode}>
        {darkTheme ? (
          <FaSun size='24' className='top-navigation-icon' />
        ) : (
          <FaMoon size='24' className='top-navigation-icon' />
        )}
      </span>
    );
  };

  const Search = () => (
    <div className='search'>
      <input className='search-input' type='text' placeholder='Search Your Creatures...' />
      <FaSearch size='18' className='text-secondary my-auto' />
    </div>
  );

  const BellIcon = () => <FaRegBell size='24' className='top-navigation-icon' />;
  const UserCircle = () => <FaUserCircle size='24' className='top-navigation-icon' />;
  const Title = () => <h5 className='title-text'>{getTitle()}</h5>;

  return (
    <div className='top-navigation'>
      <Title />
      <Search />
      <ThemeIcon />
      <BellIcon />
      <UserCircle />
    </div>
  );
};

export default TopNavigation;