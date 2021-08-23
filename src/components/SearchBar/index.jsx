import React, { useEffect, useContext } from 'react';
import './style.css';
import { MdSearch } from 'react-icons/md';
import { SearchContext } from '../../Contexts/SearchText';

function SearchBar({ onClick, searchBar }) {

  const context = useContext(SearchContext);

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
