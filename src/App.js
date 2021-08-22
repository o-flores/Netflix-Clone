import React from 'react';
import './App.css';
import MoviesList from './components/MoviesList';
import Header from './components/Header';
import FeaturedMovie from './components/FeaturedMovie';

function App() {

  return (
    <div className="App">
      <Header />
      <FeaturedMovie />
      <MoviesList />
    </div>
  );
}

export default App;
