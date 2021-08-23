import React, { useState, createContext, useEffect } from 'react';
import { searchMulti } from '../services/api';

export const SearchContext = createContext({});

export const SearchContextProvider = ({ children }) => {
  const [searchText, setSearchText] = useState('');
  const [queryResults, setQueryResults] = useState([]);

  useEffect(() => {
    const fetchMoviesByQuery = async () => {
      const data = await searchMulti(searchText);
      setQueryResults(data);
    }
    fetchMoviesByQuery();
  }, [searchText]);

  return (
    <SearchContext.Provider
      value={ {searchText, setSearchText, queryResults} }
    >
      { children }
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;