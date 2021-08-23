import React, { useContext } from 'react';
import { SearchContext } from '../../Contexts/SearchText';
import MovieCard from '../MovieCard';
import './style.css';

function SearchList() {
  const { queryResults } = useContext(SearchContext);

  let queryResultsFilter = queryResults.results;
  if (queryResults.results) {
    queryResultsFilter = queryResults.results.filter((result) => result.media_type !== 'person' && result.poster_path !== null);
  }

  return (
    <div className="list-container">
      {queryResultsFilter && queryResultsFilter.length > 0 && queryResultsFilter.map((result) => {
        return <MovieCard key={ result.id } {...result} />
      })
      }
      { queryResultsFilter && queryResultsFilter.length === 0 && <p>sem resultados</p>}
    </div>
  );
};

export default SearchList;
