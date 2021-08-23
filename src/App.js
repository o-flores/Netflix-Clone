import React, { useContext } from 'react';
import './App.css';
import MoviesList from './components/MoviesList';
import Header from './components/Header';
import FeaturedMovie from './components/FeaturedMovie';
import { SearchContext } from './Contexts/SearchText';

function App() {
  const { searchText } = useContext(SearchContext);
  console.log(searchText.length);
  return (
    <div className="App">
      <Header />
      {searchText.length === 0 && (
        <>
          <FeaturedMovie />
          <MoviesList />
        </>
      )}
    </div>
  );
}

export default App;
