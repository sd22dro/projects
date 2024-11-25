// src/components/Favorites.js
import React, { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import { Container, Grid, Typography } from '@mui/material';
import RecipeCard from './RecipeCard';

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Your Favorite Recipes
      </Typography>
      {favorites.length > 0 ? (
        <Grid container spacing={4}>
          {favorites.map((recipe) => (
            <Grid item key={recipe.id} xs={12} sm={6} md={4}>
              <RecipeCard recipe={recipe} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6" sx={{ mt: 4 }}>
          You have no favorite recipes yet.
        </Typography>
      )}
    </Container>
  );
};

export default Favorites;
