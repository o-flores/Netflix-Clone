import React, { useState, createContext } from 'react';

export const SearchContext = createContext({});

export const SearchContextProvider = ({ children }) => {
  const [searchText, setSearchText] = useState('');
  return (
    <SearchContext.Provider
      value={ {searchText, setSearchText} }
    >
      { children }
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;