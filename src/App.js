import React, { useContext } from 'react';
import './App.css';
import MoviesList from './components/MoviesList';
import Header from './components/Header';
import FeaturedMovie from './components/FeaturedMovie';
import { SearchContext } from './Contexts/SearchText';
import SearchList from './components/SearchList';

function App() {
  const { searchText } = useContext(SearchContext);
  return (
    <div className="App">
      <Header />
      {searchText.length === 0 ? (
        <>
          <FeaturedMovie />
          <MoviesList />
        </>
      ) : (
        <SearchList />
      )}
    </div>
  );
}

export default App;
