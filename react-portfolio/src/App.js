import React, { useState } from 'react';
import About from '..src/components/about';
import Contact from '..src/components/contact';
import Footer from '..src/components/footer';
import Header from '..src/components/header';
import Portfolio from '..src/components/portfolio';
import Resume from '..src/components/resume';
import { Helmet } from 'react-helmet';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
