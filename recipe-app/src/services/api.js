// src/services/api.js
const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com/recipes';

/**
 * Fetches recipes based on a search query and applied filters.
 *
 * @param {string} query - The search term.
 * @param {object} filters - An object containing filter parameters.
 * @returns {Promise<Array>} - A promise that resolves to an array of recipes.
 */
export const fetchRecipes = async (query = '', filters = {}) => {
  try {
    let url = `${BASE_URL}/complexSearch?apiKey=${API_KEY}&number=20`;

    if (query) {
      url += `&query=${encodeURIComponent(query)}`;
    }

    // Add filters (e.g., cuisine, diet)
    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        url += `&${key}=${encodeURIComponent(filters[key])}`;
      }
    });

    console.log('Fetching URL:', url); // Debugging: Log the URL being fetched

    const response = await fetch(url);

    if (!response.ok) {
      console.error(`API request failed with status ${response.status}`);
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();

    console.log('API Response:', data); // Debugging: Log the API response

    // Ensure 'results' is an array
    if (Array.isArray(data.results)) {
      return data.results;
    } else {
      console.warn('Expected "results" to be an array, but got:', data.results);
      return [];
    }
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};

/**
 * Fetches detailed information about a specific recipe by ID.
 *
 * @param {number|string} id - The recipe ID.
 * @returns {Promise<object|null>} - A promise that resolves to the recipe details or null if an error occurs.
 */
export const fetchRecipeDetails = async (id) => {
  try {
    const url = `${BASE_URL}/${id}/information?apiKey=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`API request failed with status ${response.status}`);
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    return null;
  }
};
