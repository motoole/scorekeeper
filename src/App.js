import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';

// import Header from './Header.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import GamesList from './components/GamesList.js';
import Players from './components/Players.js';
import Settings from './components/Settings.js';

const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<GamesList />} />
          <Route path='players' element={<Players />} />
          <Route path='settings' element={<Settings />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
