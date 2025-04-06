import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();
    const token = Cookies.get('token');

    const handleLogout = () => {
        Cookies.remove('token');
        navigate('/login');
    };

    const navItems = [
        { text: 'Home', path: '/', icon: <HomeIcon /> },
        ...(token
            ? [{ text: 'Logout', path: '#', icon: <LogoutIcon />, action: handleLogout }]
            : [
                { text: 'Login', path: '/login', icon: <LoginIcon /> },
                { text: 'Signup', path: '/signup', icon: <AccountCircleIcon /> },
              ]),
    ];

    return (
        <>
            <AppBar position="fixed" sx={{ backgroundColor: '#1976d2' }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{
                            textDecoration: 'none',
                            color: 'white',
                            fontWeight: 'bold',
                            letterSpacing: 1.2,
                        }}
                    >
                        MyWebsite
                    </Typography>

                    {/* Desktop Nav */}
                    <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        {navItems.map(({ text, path, icon, action }) => (
                            <Button
                                key={text}
                                component={path !== '#' ? Link : 'button'}
                                to={path !== '#' ? path : undefined}
                                onClick={action}
                                color="inherit"
                                sx={{
                                    fontWeight: 'bold',
                                    textTransform: 'none',
                                    mx: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                {icon}
                                {text}
                            </Button>
                        ))}
                    </Box>

                    {/* Mobile Menu Icon */}
                    <IconButton
                        sx={{ display: { xs: 'block', sm: 'none' } }}
                        color="inherit"
                        onClick={() => setDrawerOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <Box sx={{ width: 220 }} role="presentation" onClick={() => setDrawerOpen(false)}>
                    <List>
                        {navItems.map(({ text, path, icon, action }) => (
                            <ListItem
                                button
                                component={path !== '#' ? Link : 'button'}
                                to={path !== '#' ? path : undefined}
                                onClick={action}
                                key={text}
                            >
                                <ListItemText
                                    primary={
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            {icon}
                                            {text}
                                        </Box>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>

            {/* Push content below the header */}
            <Toolbar />
        </>
    );
};

export default Header;
