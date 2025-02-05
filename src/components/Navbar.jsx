import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Box, 
  Typography, 
  Drawer, 
  List, 
  ListItem,
  ListItemIcon, 
  ListItemText, 
  IconButton, 
  Menu, 
  MenuItem,
  Container,
  createTheme,
  Button,
  Collapse,
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import BusinessIcon from '@mui/icons-material/Business';
import VerifiedIcon from '@mui/icons-material/Verified';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import WorkIcon from '@mui/icons-material/Work';
import ContactsIcon from '@mui/icons-material/Contacts';
import { ThemeProvider } from '@emotion/react';

// Enhanced Salesforce-inspired theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#0176D3', // Updated Salesforce blue
      light: '#B4D9F8',
      dark: '#014486'
    },
    secondary: {
      main: '#747474',
      light: '#919191',
      dark: '#565656'
    },
    background: {
      default: '#FFFFFF',
      paper: '#F9FAFB'
    },
    text: {
      primary: '#032D60',
      secondary: '#444444'
    }
  },
  typography: {
    fontFamily: '"Salesforce Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h6: {
      fontWeight: 600,
      letterSpacing: '0.02em'
    },
    button: {
      textTransform: 'none',
      fontWeight: 500
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          backgroundColor: '#FFFFFF'
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: 'none',
          boxShadow: '2px 0 8px rgba(0,0,0,0.08)'
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          margin: '4px 8px',
          '&:hover': {
            backgroundColor: 'rgba(1, 118, 211, 0.08)'
          }
        }
      }
    }
  }
});

// Enhanced styled components
const StyledNavLink = styled(RouterLink)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
  padding: '8px 16px',
  borderRadius: '8px',
  fontSize: '0.95rem',
  fontWeight: 500,
  transition: 'all 0.2s ease',
  position: 'relative',
  '&:hover': {
    backgroundColor: 'rgba(1, 118, 211, 0.08)',
    color: theme.palette.primary.main
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 0,
    height: '3px',
    backgroundColor: theme.palette.primary.main,
    transition: 'width 0.3s ease'
  },
  '&:hover::after': {
    width: '70%'
  }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  padding: '8px 16px',
  borderRadius: '8px',
  fontSize: '0.95rem',
  fontWeight: 500,
  '&:hover': {
    backgroundColor: 'rgba(1, 118, 211, 0.08)',
    color: theme.palette.primary.main
  }
}));

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsAnchor, setProductsAnchor] = useState(null);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/', icon: <HomeIcon /> },
    { label: 'About', path: '/about', icon: <InfoIcon /> },
    { 
      label: 'Products', 
      type: 'dropdown',
      icon: <ShoppingBasketIcon />,
      items: [
        { label: 'Field Crop Seeds', path: '/products/FieldCropSeeds' },
        { label: 'Vegetable Seeds', path: '/products/VegetableSeeds' },
        { label: 'FruitSeeds', path: '/products/FruitSeeds' },
        { label: 'Oilseeds', path: '/products/Oilseeds' },
        { label: 'Fodder Crop Seeds', path: '/products/FodderCropSeeds' },
      ]
    },
    { label: 'Quality', path: '/quality', icon: <VerifiedIcon /> },
    { label: 'Media/Gallery', path: '/media-gallery', icon: <PhotoLibraryIcon /> },
    { label: 'Contact', path: '/contact', icon: <ContactsIcon /> }
  ];

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleProductsMenu = (event) => setProductsAnchor(event.currentTarget);
  const handleProductsClose = () => setProductsAnchor(null);
  
  const MobileNavDrawer = () => (
    <Box sx={{ width: 280, p: 2 }}>
      <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h5" color="primary" sx={{ fontWeight: 700 }}>
          MAHADEV SEEDS
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <ChevronRightIcon />
        </IconButton>
      </Box>
      <List>
        {navLinks.map((link, index) => (
          <React.Fragment key={index}>
            {link.type === 'dropdown' ? (
              <>
                <ListItem 
                  button 
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  sx={{ mb: 1 }}
                >
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    {link.icon}
                  </ListItemIcon>
                  <ListItemText primary={link.label} />
                  {mobileProductsOpen ? <ExpandMoreIcon /> : <ChevronRightIcon />}
                </ListItem>
                <Collapse in={mobileProductsOpen}>
                  <List disablePadding>
                    {link.items.map((subLink) => (
                      <ListItem
                        button
                        key={subLink.path}
                        onClick={() => {
                          navigate(subLink.path);
                          handleDrawerToggle();
                        }}
                        sx={{ pl: 6 }}
                      >
                        <ListItemText 
                          primary={subLink.label}
                          primaryTypographyProps={{ fontSize: '0.9rem' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </>
            ) : (
              <ListItem
                button
                onClick={() => {
                  navigate(link.path);
                  handleDrawerToggle();
                }}
                selected={location.pathname === link.path}
                sx={{
                  mb: 1,
                  backgroundColor: location.pathname === link.path ? 
                    'rgba(1, 118, 211, 0.08)' : 'transparent'
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  {link.icon}
                </ListItemIcon>
                <ListItemText primary={link.label} />
              </ListItem>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <AppBar 
        position="sticky" 
        color="default"
        sx={{
          transition: 'all 0.3s ease',
          boxShadow: scrolled ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          backgroundColor: scrolled ? 'rgba(255,255,255,0.98)' : '#ffffff'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar 
            disableGutters 
            sx={{ 
              minHeight: scrolled ? 64 : 72,
              transition: 'min-height 0.3s ease'
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

           <img className='h-14 w-14 ' src="/logoMahadevseeds.jpg" alt="mahadev seeds logo"></img>
                <span className='text-4xl font-bold text-red-500	ml-2' >Mahadev Seeds</span>
            <Box sx={{ 
              display: { xs: 'none', sm: 'flex' }, 
              alignItems: 'center',
              ml: 'auto'
            }}>
              {navLinks.map((link) => 
                link.type === 'dropdown' ? (
                  <React.Fragment key={link.label}>
                    <StyledButton
                      onClick={handleProductsMenu}
                      endIcon={
                        <ExpandMoreIcon 
                          sx={{ 
                            transform: Boolean(productsAnchor) ? 
                              'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s'
                          }}
                        />
                      }
                    >
                      {link.label}
                    </StyledButton>
                    <Menu
                      anchorEl={productsAnchor}
                      open={Boolean(productsAnchor)}
                      onClose={handleProductsClose}
                      elevation={3}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      sx={{
                        '& .MuiPaper-root': {
                          borderRadius: '8px',
                          mt: 1,
                          minWidth: 180
                        }
                      }}
                    >
                      {link.items.map((subLink) => (
                        <MenuItem 
                          key={subLink.path} 
                          onClick={() => {
                            navigate(subLink.path);
                            handleProductsClose();
                          }}
                          sx={{
                            borderRadius: '4px',
                            mx: 1,
                            my: 0.5,
                            '&:hover': {
                              backgroundColor: 'rgba(1, 118, 211, 0.08)'
                            }
                          }}
                        >
                          {subLink.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </React.Fragment>
                ) : (
                  <StyledNavLink 
                    key={link.path} 
                    to={link.path}
                    sx={{
                      '&::after': {
                        width: location.pathname === link.path ? '70%' : 0
                      }
                    }}
                  >
                    {link.label}
                  </StyledNavLink>
                )
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { width: 280 }
        }}
      >
        <MobileNavDrawer />
      </Drawer>
    </ThemeProvider>
  );
};

export default Navbar;