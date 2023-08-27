import React from 'react';
import {
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import './ThemeToggleButton.css'
interface ThemeToggleButtonProps {
  themeMode: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({
  themeMode,
  toggleTheme,
}) => {
  return (
    <ToggleButtonGroup
      value={themeMode}
      exclusive
      onChange={toggleTheme}
      aria-label="theme toggle"
      className={`toggle-group ${themeMode}`}
    >
      <ToggleButton
        value="light"
        aria-label="light theme"
        className="small-button"
      >
        <LightModeIcon className={`icon ${themeMode === 'light' ? 'active' : ''}`} />
      </ToggleButton>
      <ToggleButton
        value="dark"
        aria-label="dark theme"
        className="small-button"
      >
        <DarkModeIcon className={`icon ${themeMode === 'dark' ? 'active' : ''}`} />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ThemeToggleButton;
