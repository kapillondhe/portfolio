import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, createTheme} from '@mui/material';
import Heading from './components/Heading/Heading';
import Body from './components/Body/Body';
import './App.css'

const primaryLightColor = '#4CAF50'; // Green
const secondaryLightColor = '#FFC107'; // Light Orange (Amber)
const primaryDarkColor = '#1976D2'; // Blue
const secondaryDarkColor = '#FFEB3B'; // Yellow

const App: React.FC = () => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light'); // 'light' or 'dark'

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: themeMode === 'light' ? primaryLightColor : primaryDarkColor,
      },
      secondary: {
        main: themeMode === 'light' ? secondaryLightColor : secondaryDarkColor,
      },
    },
  });

  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <div className="container">          
          <Heading themeMode={themeMode} toggleTheme={toggleTheme}/>
          <Body/>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
