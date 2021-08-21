import React from 'react';

function MovieCard(props) {
  const BASE_URL = 'http://image.tmdb.org/t/p/';
  const backdropPath = `${BASE_URL}w200${props.poster_path}`
  return (
    <div>
      <img
        src={backdropPath}
        alt={`poster of ${props.title}`}
      />
    </div>
  );
};

export default MovieCard;
