import React, { useState } from 'react';
import {
  ThemeProvider,
  CssBaseline,
  createTheme,
} from '@mui/material';

import Heading from './components/Heading/Heading';
import Body from './components/Body/Body';
import ThemeToggleButton from './components/ThemeToggleButton/ThemeToggleButton';
import './App.css'

const App: React.FC = () => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light'); // 'light' or 'dark'

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <div className="container">
          <div className='toggleButton'>
            <ThemeToggleButton themeMode={themeMode} toggleTheme={toggleTheme}  />
          </div>
          
          <Heading/>
          <Body/>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
