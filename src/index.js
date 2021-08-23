import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SearchContextProvider from './Contexts/SearchText';

ReactDOM.render(
  <React.StrictMode>
    <SearchContextProvider>
      <App />
    </SearchContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

