import React from 'react';
import './style.css';

function MovieCard({ title, poster_path }) {
  const BASE_URL = 'http://image.tmdb.org/t/p/';
  const posterPath = `${BASE_URL}w154${poster_path}`;
  return (
    <div className="poster">
      <img
        src={posterPath}
        alt={`poster of ${title}`}
      />
    </div>
  );
};

export default MovieCard;
