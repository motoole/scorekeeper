import * as React from 'react';
import './App.css';
import { Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';

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
          <Content />
        </Container>
        <Footer />
      </div>
      </ThemeProvider>
  );
}

export default App;
