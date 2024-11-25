// src/components/RecipeList.js
import React, { useEffect, useState } from 'react';
import { fetchRecipes } from '../services/api';
import RecipeCard from './RecipeCard';
import {
  Container,
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Typography,
} from '@mui/material';
import Spinner from './Spinner';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({ cuisine: '', diet: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRecipes = async () => {
      setLoading(true);
      setError(null);
      const data = await fetchRecipes(query, filters);

      if (Array.isArray(data)) {
        setRecipes(data);
        if (data.length === 0 && query !== '') {
          setError('No recipes found for your search.');
        }
      } else {
        setRecipes([]);
        setError('Failed to load recipes.');
      }
      setLoading(false);
    };

    getRecipes();
  }, [query, filters]);

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchQuery = form.elements.search.value.trim();
    setQuery(searchQuery);
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <Container sx={{ py: 4 }}>
      <Box component="form" onSubmit={handleSearch} sx={{ mb: 4 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              name="search"
              label="Search recipes..."
              defaultValue={query}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <FormControl fullWidth>
              <InputLabel>Cuisine</InputLabel>
              <Select
                name="cuisine"
                value={filters.cuisine}
                onChange={handleFilterChange}
                label="Cuisine"
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Italian">Italian</MenuItem>
                <MenuItem value="Chinese">Chinese</MenuItem>
                <MenuItem value="Indian">Indian</MenuItem>
                <MenuItem value="Mexican">Mexican</MenuItem>
                {/* Add more options as needed */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <FormControl fullWidth>
              <InputLabel>Diet</InputLabel>
              <Select
                name="diet"
                value={filters.diet}
                onChange={handleFilterChange}
                label="Diet"
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="vegetarian">Vegetarian</MenuItem>
                <MenuItem value="vegan">Vegan</MenuItem>
                <MenuItem value="gluten free">Gluten Free</MenuItem>
                {/* Add more options as needed */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>

      {error && (
        <Typography
          variant="h6"
          color="error"
          sx={{ mb: 4, textAlign: 'center' }}
        >
          {error}
        </Typography>
      )}

      <Grid container spacing={4}>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <Grid item key={recipe.id} xs={12} sm={6} md={4}>
              <RecipeCard recipe={recipe} />
            </Grid>
          ))
        ) : !error ? (
          <Typography
            variant="h6"
            sx={{ textAlign: 'center', width: '100%', mt: 4 }}
          >
            No recipes found.
          </Typography>
        ) : null}
      </Grid>
    </Container>
  );
};

export default RecipeList;
