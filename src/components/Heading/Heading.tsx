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
            <AppBar position='fixed' sx={{ background: 'transparent',boxShadow: 0 }}>
                <div className='headingContainer'>
                    <div className='linkButtons'>
                        <Stack spacing={2} direction="row">
                            <Button variant="text">Home</Button>
                            <Button variant="text">About</Button>
                            <Button variant="text">Experience</Button>
                            <Button variant="text">Skills</Button>
                            <Button variant="text">Projects</Button>
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