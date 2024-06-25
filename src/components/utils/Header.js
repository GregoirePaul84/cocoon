import React from 'react';
import { AppBar, IconButton, Toolbar, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logoSrc from '../../medias/images/logo.svg';

const pages = ['Services', 'Votre concierge', 'Tarifs', 'Contact'];

const Header = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
      
    return (
        <AppBar 
            position='absolute'
            sx={{
                height: '70px',
                width: '100%',
                // bgcolor: '#504131e6',
                bgcolor: 'transparent',
                boxShadow: 'none'
            }}
        >
            <Toolbar
                sx={{
                    height: '100%',
                    width: '100vw',
                    justifyContent: 'space-between'
                }}
            >
                <img 
                    src={logoSrc} 
                    alt="logo conciergerie cocoon" 
                    style={{
                        height: '100%'
                    }}
                />
                <IconButton
                    size="large"
                    color="inherit"
                    aria-label="menu"
                    sx={{
                        padding: '0'
                    }}
                    onClick={handleOpenNavMenu}
                >
                    <MenuIcon fontSize='large' />
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
                        display: { xs: 'block', md: 'none' },
                        '& .MuiMenu-paper': {
                            bgcolor: '#E6C9A8'
                        }
                    }}
                >
                    {pages.map((page) => (
                        <a href={`#${page.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                            <Typography 
                                align="center" 
                                fontFamily='"Dosis", sans-serif'
                                fontWeight='500'
                            >
                                {page}
                            </Typography>
                            </MenuItem>
                        </a>
                    ))}
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Header;