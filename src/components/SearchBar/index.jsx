import React, { useEffect } from 'react';
import './style.css';
import { MdSearch } from 'react-icons/md';

function SearchBar({ onClick, searchBar }) {

  useEffect(() => {
    const clickListener = () => {
      if (searchBar) onClick(false);
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
        />
      </label>
    </div>
  );
};

export default SearchBar;
