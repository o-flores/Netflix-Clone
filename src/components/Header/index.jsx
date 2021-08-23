import React, { useEffect, useState } from 'react';
import logo from '../../images/netflixLogo.png';
import './style.css';
import { MdSearch } from 'react-icons/md';
import { MdNotificationsNone } from 'react-icons/md';
import avatar from '../../images/avatar.png';
import SearchBar from '../SearchBar';

function Header() {
  const [blackHeader, setBlackHeader] = useState(false);
  const [searchBar, setSearchBar] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
     if (window.scrollY > 20) setBlackHeader(true);
     else setBlackHeader(false)
    }
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return(
    <header className={ blackHeader ? 'black-header' : '' }>
      <div className="header-container">
        <div className="left-header">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="Netflix Logo" />
            </a>
          </div>
          <a href="/">Início</a>
          <a href="/">Séries</a>
          <a href="/">Filmes</a>
          <a href="/">Bombando</a>
          <a href="/">Minha Lista</a>
        </div>
        <div className="right-header">
          { !searchBar && <MdSearch onClick={ () => setSearchBar(!searchBar) } className="search-icon" />}
          { searchBar && <SearchBar onClick={ setSearchBar } searchBar={ searchBar } />}
          <MdNotificationsNone className="notification-icon" />
          <img src={ avatar } alt="Netflix Avatar" />
        </div>
      </div>
    </header>
  );
}

export default Header;
