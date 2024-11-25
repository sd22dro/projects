// src/components/HeroSection.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HeroSection = () => (
  <Box
    sx={{
      height: { xs: '300px', md: '500px' },
      backgroundImage: `url('https://source.unsplash.com/featured/?food')`, // Replace with your image URL
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      px: 2,
      position: 'relative',
      mb: 4,
    }}
  >
    <Typography
      variant="h3"
      component="h1"
      sx={{
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
      }}
    >
      Welcome to Delicious Recipes
    </Typography>
    <Typography
      variant="h5"
      component="p"
      sx={{ mt: 2, textShadow: '1px 1px 3px rgba(0,0,0,0.6)' }}
    >
      Find the best recipes for any occasion!
    </Typography>
    <Button
      component={Link}
      to="/"
      variant="contained"
      color="secondary"
      sx={{ mt: 4 }}
    >
      Explore Now
    </Button>
  </Box>
);

export default HeroSection;
