import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipeDetails } from '../services/api';
import { FavoritesContext } from '../context/FavoritesContext';
import { Box, Typography, IconButton, Chip, Grid } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import Spinner from './Spinner';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const { addFavorite, removeFavorite, isFavorite } =
    useContext(FavoritesContext);

  useEffect(() => {
    const getRecipe = async () => {
      const data = await fetchRecipeDetails(id);
      setRecipe(data);
    };
    getRecipe();
  }, [id]);

  if (!recipe) return <Spinner />;

  const handleFavorite = () => {
    if (isFavorite(recipe.id)) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe);
    }
  };

  return (
    <Box sx={{ padding: { xs: 2, md: 4 } }}>
      <Typography variant="h3" component="h1" gutterBottom>
        {recipe.title}
        <IconButton onClick={handleFavorite} aria-label="add to favorites">
          {isFavorite(recipe.id) ? (
            <Favorite color="error" />
          ) : (
            <FavoriteBorder />
          )}
        </IconButton>
      </Typography>
      <Box
        component="img"
        sx={{
          width: '100%',
          maxHeight: 500,
          objectFit: 'cover',
          borderRadius: 2,
          marginBottom: 4,
        }}
        src={recipe.image}
        alt={recipe.title}
      />
      <Typography variant="h5" component="h2" gutterBottom>
        Ingredients
      </Typography>
      <Grid container spacing={1}>
        {recipe.extendedIngredients.map((ing) => (
          <Grid item key={ing.id}>
            <Chip label={ing.original} variant="outlined" />
          </Grid>
        ))}
      </Grid>
      <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
        Instructions
      </Typography>
      <Typography
        component="div"
        dangerouslySetInnerHTML={{ __html: recipe.instructions }}
      />
    </Box>
  );
};

export default RecipeDetails;
