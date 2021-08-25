import React, { useEffect, useContext } from 'react';
import './style.css';
import { MdSearch } from 'react-icons/md';
import { SearchContext } from '../../Contexts/SearchText';

function SearchBar({ onClick }) {

  const { setSearchText, searchText } = useContext(SearchContext);

  
  useEffect(() => {
    const clickListener = ({ target }) => {
      const input = document.getElementById('searchInput');
      if(target === input) return;
      handleSearchClick();
      setTimeout(() => {
        onClick(false);
      }, 500);
    }
    
    window.addEventListener('click', clickListener);

    return () => {
      window.removeEventListener('click', clickListener);
      clearTimeout();
    }
  }, []);

  function handleSearchClick() {
    const div = document.getElementsByClassName('searchInput')[0];
    div.classList.add('fade-out');
  }


  return (
    <div className="searchInput">
      <MdSearch
        onClick={ handleSearchClick }
        className="icon-search"
      />
      <label htmlFor="searchInput">
        <input
          type="text"
          placeholder="Títulos, gente e gêneros"
          name="searchInput"
          id="searchInput"
          onChange={ ({ target }) => setSearchText(target.value) }
          value={ searchText }
        />
      </label>
    </div>
  );
};

export default SearchBar;
