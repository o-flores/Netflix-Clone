import React, { useEffect, useState } from 'react';
import { getHomePageList } from '../../services/api';
import MovieContainer from '../MovieContainer';
import './style.css';

function MoviesList() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const fetchHomeList = async () => {
      const list = await getHomePageList();
      setMoviesList(list);
    }

    fetchHomeList();
  }, [])
  return (
    <div className="category-container">
      { moviesList.length > 0 && moviesList.map((category) => {
        return <MovieContainer key={ category.slug } {...category} />
      }) }
    </div>
  )
}

export default MoviesList;