import React from 'react';
import { AppBar, IconButton, Toolbar, Menu, MenuItem, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logoSrc from '../../medias/images/logo_2.svg';
import { useScroll } from './ScrollContext';
import { pages } from '../../content/navigation/navigationContent';

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [hovered, setHovered] = React.useState(null); // Pour gérer l'état de survol

    const { scrollTo } = useScroll();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar 
            id='top'
            position='absolute'
            sx={{
                height: { xs: '70px', sm: '80px', md: '110px' },
                width: '100%',
                bgcolor: 'transparent',
                boxShadow: 'none',
                zIndex: '900'
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <img 
                    src={logoSrc} 
                    alt="logo conciergerie cocoon" 
                    style={{ height: '100%' }}
                />
                <IconButton
                    size="large"
                    color="inherit"
                    aria-label="menu"
                    sx={{ padding: '0', display: { xs: 'block', md: 'none' } }}
                    onClick={handleOpenNavMenu}
                >
                    <MenuIcon fontSize='large' />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    keepMounted
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{ display: { xs: 'block', md: 'none' }, '& .MuiMenu-paper': { bgcolor: '#E6C9A8' } }}
                >
                {pages.map((page) => (
                    <MenuItem key={page.name} onClick={() => {
                        handleCloseNavMenu();
                        scrollTo(page.name.toLowerCase(), page.offset);
                        }}
                    >
                    <Typography align="center" fontFamily='"Dosis", sans-serif' fontWeight='500'>
                        {page.name}
                    </Typography>
                    </MenuItem>
                ))}
                </Menu>

                {/* Desktop Links */}
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-evenly' }}>
                    {pages.map((page) => (
                        <button 
                            key={page.name} 
                            onClick={() => scrollTo(page.name.toLowerCase(), page.offset)}
                            onMouseEnter={() => setHovered(page.name)}
                            onMouseLeave={() => setHovered(null)}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'inherit',
                                textDecoration: 'none',
                                position: 'relative',
                                cursor: 'pointer',
                                overflow: 'hidden',
                              }}
                        >
                            <Typography 
                                 sx={{ 
                                    my: 2,
                                    display: 'block',
                                    fontFamily: '"Dosis", sans-serif',
                                    fontWeight: '200',
                                    fontSize: { md: '2em' },
                                    position: 'relative',
                                    zIndex: 1
                                  }}>
                                {page.name}
                            </Typography>
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                height: '2px',
                                width: '100%',
                                backgroundColor: hovered === page.name ? '#EAC985' : 'transparent',
                                transform: hovered === page.name ? 'scaleX(1)' : 'scaleX(0)',
                                transition: 'transform 0.3s ease-in-out, backgroundColor 0.3s ease-in-out', 
                                transformOrigin: 'left' 
                            }} />
                        </button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
