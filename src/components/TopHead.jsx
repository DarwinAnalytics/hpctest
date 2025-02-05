import React from 'react';
import { Box, Typography, useMediaQuery, styled } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom'; // Import Link for routing

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem 2rem',
  backgroundColor: theme.palette.background.default,
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const TopHead = () => {
  return (
    <StyledBox>
      <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <PhoneIcon sx={{ color: '#007bff', fontSize: '18px', 
                      transition: 'all 0.2s ease-in-out', 
                      '&:hover': { color: '#005cbf' } }} /> 
        <Typography variant="body2" sx={{ ml: 1 }}>
          <a href="tel:+917909732727" style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.2s ease-in-out' }}>
            +(91) 7909732727          </a>
          {' | '}
          
        </Typography>
        <MailIcon sx={{ color: '#007bff', fontSize: '18px', ml: 2, 
                      transition: 'all 0.2s ease-in-out', 
                      '&:hover': { color: '#005cbf' } }} />
        <Typography variant="body2" sx={{ ml: 1, cursor: 'pointer', transition: 'all 0.2s ease-in-out' }}>
          <a href="mailto:info@bombaysuper.in" style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.2s ease-in-out' }}>
            mahadevseedsind@gmail.com
          </a>
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Link to="https://www.facebook.com/profile.php?id=61570367235973&mibextid=ZbWKwL" target="_blank" style={{ textDecoration: 'none' }}>
          <FacebookIcon sx={{ color: '#3b5998', fontSize: '24px', mr: 2, cursor: 'pointer', 
                            transition: 'all 0.2s ease-in-out', 
                            '&:hover': { color: '#2e4484' } }} /> 
        </Link>
        <Link to="https://www.instagram.com/mahadevseeds" target="_blank" style={{ textDecoration: 'none' }}>
          <InstagramIcon sx={{ color: '#e1306c', fontSize: '24px', cursor: 'pointer', 
                              transition: 'all 0.2s ease-in-out', 
                              '&:hover': { color: '#d1275f' } }} /> 
        </Link>
      </Box>
    </StyledBox>
  );
};

export default TopHead;