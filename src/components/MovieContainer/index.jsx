import React from 'react';
import MovieCard from '../MovieCard';
import './style.css';
import { MdNavigateNext } from 'react-icons/md';
import { MdNavigateBefore } from 'react-icons/md';


function MovieContainer({ title, list }) {
  return (
    <>
      <h2>{ title }</h2>
      <div className="carousel-container">
        <MdNavigateBefore className="navigate-prev"/>
        <div className="movieContainer">
          { list.results.map((item) => {
            return <MovieCard key={ item.id } {...item} />
          }) }
        </div>
        <MdNavigateNext className="navigate-next"/>
      </div>
    </>
  );
};

export default MovieContainer;
