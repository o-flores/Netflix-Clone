import React, { useEffect, useState } from 'react';
import tmdb from '../../services/api';
import MovieContainer from '../MovieContainer';

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
      { moviesList.length > 0 && moviesList.map((category) => {
        return <MovieContainer key={ category.slug } {...category} />
      }) }
    </div>
  )
}

export default MoviesList;