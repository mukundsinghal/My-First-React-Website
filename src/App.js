import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './components/MainRouter';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
          <MainRouter />
       </BrowserRouter>
    </div>
  );
}

export default App;
