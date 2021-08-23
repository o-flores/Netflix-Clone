import React, { useContext } from 'react';
import { SearchContext } from '../../Contexts/SearchText';

function SearchList() {
  const { queryResults } = useContext(SearchContext);

  return (
    <div className="list-container">
      Filmes
    </div>
  );
};

export default SearchList;
