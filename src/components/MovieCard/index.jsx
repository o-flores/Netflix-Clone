import React from 'react';
import './style.css';

function MovieCard(props) {
  const BASE_URL = 'http://image.tmdb.org/t/p/';
  const backdropPath = `${BASE_URL}w200${props.poster_path}`
  return (
    <div className="poster">
      <img
        src={backdropPath}
        alt={`poster of ${props.title}`}
      />
    </div>
  );
};

export default MovieCard;
