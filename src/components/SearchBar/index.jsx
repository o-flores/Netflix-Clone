import React, { useEffect, useContext } from 'react';
import './style.css';
import { MdSearch } from 'react-icons/md';
import { SearchContext } from '../../Contexts/SearchText';

function SearchBar({ onClick, searchBar }) {

  const { setSearchText, searchText } = useContext(SearchContext);

  useEffect(() => {
    const clickListener = ({ target }) => {
      const input = document.getElementById('searchInput');
      if(target === input) return;
      onClick(false);
    }
    
    window.addEventListener('click', clickListener);

    return () => {
      window.removeEventListener('click', clickListener);
    }
  }, []);

  return (
    <div className="searchInput">
      <MdSearch
        onClick={ () => onClick(!searchBar) }
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
