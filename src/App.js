import React, { useEffect } from 'react';
import './App.css';
import tmdb from './services/api'

function App() {

  useEffect(() => {
    const fetchHomeList = async () => {
      const list = await tmdb();
      console.log(list);
    }

    fetchHomeList();
  }, [])

  return (
    <div className="App">
      Hello world!
    </div>
  );
}

export default App;
