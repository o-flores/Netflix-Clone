import React, { useState } from 'react';
import MovieCard from '../MovieCard';
import './style.css';
import { MdNavigateNext } from 'react-icons/md';
import { MdNavigateBefore } from 'react-icons/md';


function MovieContainer({ title, list }) {
  const [scrollx, setScrollx] = useState(0);

  function handlePrev() {
    let x = scrollx + Math.round(window.innerWidth / 2);
    if (x > 0) x = 0;
    setScrollx(x);
  }

  function handleNext() {
    let x = scrollx - Math.round(window.innerWidth / 2);
    const totalWidth = list.results.length * 200;
    if ((window.innerWidth - totalWidth) > x) {
      x = window.innerWidth - totalWidth - 60;
    }
    setScrollx(x);
  }
  return (
    <>
      <h2>{ title }</h2>
      <div 
        className="carousel-container"
        style={{ marginLeft: scrollx }}
      >
        {scrollx !== 0 &&
          <MdNavigateBefore
            onClick={ handlePrev }
            className="navigate-prev"
          />
        }
        <div className="movieContainer">
          { list.results.map((item) => {
            return <MovieCard key={ item.id } {...item} />
          }) }
        </div>
        <MdNavigateNext
          onClick={ handleNext }
          className="navigate-next"
        />
      </div>
    </>
  );
};

export default MovieContainer;
