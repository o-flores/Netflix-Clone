import React from 'react';
import logo from '../../images/netflixLogo.png';
import './style.css';
import { MdSearch } from 'react-icons/md';
import { MdNotificationsNone } from 'react-icons/md';
import avatar from '../../images/avatar.png';


function Header() {
  return(
    <header>
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
          <MdSearch className="search-icon" />
          <MdNotificationsNone className="notification-icon" />
          <img src={ avatar } alt="Netflix Avatar" />
        </div>
      </div>
    </header>
  );
}

export default Header;
