import AppBar from '@mui/material/AppBar';
import React, { useState } from 'react';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Heading.css'
interface HeadingProps {
    themeMode: 'light' | 'dark';
    toggleTheme: () => void;
  }

const Heading : React.FC<HeadingProps>= ({ themeMode, toggleTheme,})=>{
    return(
        <div className='heading'>
            <AppBar position='fixed' color="secondary"  sx={{ boxShadow: 1, zIndex: 10 }}>
                <div className='headingContainer'>
                    <div className='linkButtons'>
                        <Stack spacing={2} direction="row">
                            <Button variant="text" style={{ textTransform: 'none' }}>Home</Button>
                            <Button variant="text" style={{ textTransform: 'none' }}>About</Button>
                            <Button variant="text" style={{ textTransform: 'none' }}>Experience</Button>
                            <Button variant="text" style={{ textTransform: 'none' }}>Skills</Button>
                            <Button variant="text" style={{ textTransform: 'none' }}>Projects</Button>
                        </Stack>
                    </div>
                    <div className='toggleButton'>
                        <ThemeToggleButton themeMode={themeMode} toggleTheme={toggleTheme}  />
                    </div>
                </div>
            </AppBar>
        </div>
    )
}

export default Heading;