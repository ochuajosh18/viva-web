import { useState } from 'react';
import { HeaderNavLinkContainer, HeaderNavLink } from './CommonVivaComponents';
import { Button, createTheme, Menu, MenuItem, ThemeProvider } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

interface HeaderNavItemProps {
   activeRoute: string;
   label: string;
   subMenu: boolean;
   routeName: string;
}

export const HeaderNavItem = (props: HeaderNavItemProps) => {
    const { label, subMenu, routeName } = props;
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    const handleOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };
  
    const handleClose = (e: any) => {
        if (e.currentTarget.localName !== 'ul') {
            const menu = window.document.getElementById('simple-menu')?.children[2] as HTMLElement;
            let menuBoundary = {
                left:  menu.offsetLeft + 40,
                top: menu.offsetHeight + e.currentTarget.offsetTop,
                right: menu.offsetLeft + menu.offsetHeight,
                bottom: menu.offsetTop + menu.offsetHeight
            };
            if (
                (e.clientX) >= menuBoundary.left &&
                (e.clientX + 40) <= menuBoundary.right &&
                e.clientY <= menuBoundary.bottom &&
                e.clientY <= menuBoundary.top
            ) {
                return;
            }
        }
    
        setOpen(false);
    };

    const theme = createTheme({
        components: {
            MuiList: {
                defaultProps: {
                    onMouseLeave: (e: any) => {
                        handleClose(e);
                    }
                }
            }
        }
    });

    const location = useLocation()
    const activeRoute = location.pathname

    return (
        <HeaderNavLinkContainer>
            {subMenu?
                <ThemeProvider theme={theme}>
                    <Button
                        id="menubutton1"
                        aria-owns={open ? 'simple-menu' : undefined}
                        aria-haspopup="true"
                        onMouseOver={handleOpen}
                        onMouseLeave={handleClose}
                        style={{ zIndex: 1301, height: '90%', width: '100%' }}
                    >
                        <HeaderNavLink className={(activeRoute === routeName) ? 'viva-header active' : 'viva-header'} to={routeName}>
                            {label}
                        </HeaderNavLink>
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={open}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center'
                        }}
                        sx={{ 
                            '& .MuiBackdrop-root': {
                                display: 'none'
                            },
                            '& .MuiMenuItem-root': {
                                backgroundColor: 'transparent !important'
                            },
                            '& .MuiMenuItem-root:hover': {
                                backgroundColor: 'transparent'
                            },
                            '& a': {
                                textDecoration: 'none',
                                padding: '0 15px',
                                color: '#000'
                            },
                            '& a:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.04)'
                            }
                        }}
                    >
                        <MenuItem>Dance</MenuItem>
                        <MenuItem>
                            <Link to="/home">Cha-Cha</Link>
                            <Link to="/home">HipHop</Link>
                        </MenuItem>
                        <MenuItem>Music</MenuItem>
                        <MenuItem>
                            <Link to="/home">Guitar</Link>
                            <Link to="/home">Piano</Link>
                            <Link to="/home">Drums</Link>
                        </MenuItem>
                    </Menu>
                </ThemeProvider>
                :
                <HeaderNavLink className={(activeRoute === routeName) ? 'viva-header active' : 'viva-header'} to={routeName}>
                    {label}
                </HeaderNavLink>
            }
        </HeaderNavLinkContainer>
    );
}
