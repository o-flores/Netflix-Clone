import React from 'react';
import './App.css';
import MoviesList from './components/MoviesList';
import Header from './components/Header';
import FeaturedMovie from './components/FeaturedMovie';
import SearchContextProvider from './Contexts/SearchText';

function App() {

  return (
    <div className="App">
      <SearchContextProvider>
        <Header />
        <FeaturedMovie />
        <MoviesList />
      </SearchContextProvider>
    </div>
  );
}

export default App;
