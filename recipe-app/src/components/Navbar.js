import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { RestaurantMenu } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <RestaurantMenu />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Delicious Recipes
        </Link>
      </Typography>
      <Button color="inherit">
        <Link
          to="/favorites"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          Favorites
        </Link>
      </Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
