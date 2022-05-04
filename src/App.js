import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// mui imports
import { Container } from '@mui/material';

//mui styles imports
import { ThemeProvider, createTheme } from '@mui/material/styles';

// component imports
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import ListPage from './components/ListPage.js';
import Players from './components/Players.js';
import Settings from './components/Settings.js';
import CreateGame from './components/CreateGame.js';
import TestComponent from './components/TestComponent.js';

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
        <Container>
          {/* <TestComponent /> */}
          <Routes>
            <Route path='/' element={<ListPage />} />
            <Route path='players' element={<Players />} />
            <Route path='settings' element={<Settings />} />
            <Route path='createGame' element={<CreateGame />} />
          </Routes>

        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
