import React, { useEffect, useState } from 'react';
import tmdb from '../../services/api';
import MovieCard from '../MovieCard';

function MoviesList() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const fetchHomeList = async () => {
      const list = await tmdb();
      setMoviesList(list);
    }

    fetchHomeList();
  }, [])
  return (
    <div>
      { moviesList.length > 0 && moviesList.map((movie) => {
        return <MovieCard key={ movie.slug } {...movie} />
      }) }
    </div>
  )
}

export default MoviesList;