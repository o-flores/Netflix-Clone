import React from 'react';
import MovieCard from '../MovieCard';

function MovieContainer({ title, list }) {
  return (
    <>
      <h2>{ title }</h2>
      <div>
        { list.results.map((item) => {
          return <MovieCard key={ item.id } {...item} />
        }) }
      </div>
    </>
  );
};

export default MovieContainer;
