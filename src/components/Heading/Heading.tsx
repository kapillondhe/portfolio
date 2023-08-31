import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import React, { useState } from 'react';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Heading.css'
interface HeadingProps {
    themeMode: 'light' | 'dark';
    toggleTheme: () => void;
  }


const pages = ['Home', 'About', 'Experience', 'Skills', 'Projects'];


const Heading : React.FC<HeadingProps>= ({ themeMode, toggleTheme,})=>{
    
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    };

    return(
        <div className='heading'>
            <AppBar position='static' color="secondary"  sx={{ boxShadow: 1, zIndex: 10 }}>
                <Container maxWidth="xl">
                    <div className='headingContainer'>
                        <div className='linkButtons'>
                            <Toolbar disableGutters>
                                <Box sx={{ flexGrow: 1, display: { xs: 'flex',sm:'none', md: 'none' } }}>
                                    <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                    >
                                    <MenuIcon />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorElNav}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        open={Boolean(anchorElNav)}
                                        onClose={handleCloseNavMenu}
                                        sx={{
                                            display: { xs: 'block',sm:'none', md: 'none' },
                                        }}
                                        >
                                        {pages.map((page) => (
                                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                                <Typography textAlign="center">{page}</Typography>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>
                                <Box sx={{ flexGrow: 1, display: { xs: 'none', sm:'flex', md: 'flex' } }}>
                                    {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                    ))}
                                </Box>
                            </Toolbar>
                        </div>
                            <div className='toggleButton'>
                                <ThemeToggleButton themeMode={themeMode} toggleTheme={toggleTheme}  />
                            </div>
                    </div>
                </Container>
            </AppBar>
        </div>
    )
}

export default Heading;