import React, { useContext } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../context/FavoritesContext';
import PropTypes from 'prop-types';

const RecipeCard = ({ recipe }) => {
  const { addFavorite, removeFavorite, isFavorite } =
    useContext(FavoritesContext);

  const handleFavorite = () => {
    if (isFavorite(recipe.id)) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe);
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: 'auto',
        position: 'relative',
        ':hover': {
          transform: 'scale(1.03)',
          boxShadow: 6,
        },
        transition: 'transform 0.3s, box-shadow 0.3s',
        backgroundColor: '#fff',
      }}
    >
      <Link
        to={`/recipe/${recipe.id}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <CardMedia
          component="img"
          height="200"
          image={recipe.image}
          alt={recipe.title}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {recipe.title}
          </Typography>
        </CardContent>
      </Link>
      <CardActions
        disableSpacing
        sx={{ position: 'absolute', top: 0, right: 0 }}
      >
        <IconButton onClick={handleFavorite} aria-label="add to favorites">
          {isFavorite(recipe.id) ? (
            <Favorite color="error" />
          ) : (
            <FavoriteBorder />
          )}
        </IconButton>
      </CardActions>
    </Card>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeCard;
