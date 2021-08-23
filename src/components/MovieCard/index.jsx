import React from 'react';
import './style.css';

function MovieCard(props) {
  const BASE_URL = 'http://image.tmdb.org/t/p/';
  const posterPath = `${BASE_URL}w154${props.poster_path}`
  return (
    <div className="poster">
      <img
        src={posterPath}
        alt={`poster of ${props.title}`}
      />
    </div>
  );
};

export default MovieCard;
