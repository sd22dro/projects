// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import Favorites from './components/Favorites';
import RecipeDetails from './components/RecipeDetails';
import { FavoritesProvider } from './context/FavoritesContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Navbar />
        <HeroSection />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
