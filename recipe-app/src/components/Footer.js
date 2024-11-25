// src/components/Footer.js
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => (
  <Box
    component={motion.div}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    sx={{
      bgcolor: 'primary.main',
      color: '#fff',
      p: 4,
      mt: 4,
    }}
  >
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      {/* Branding */}
      <Typography variant="h6" component="div" sx={{ mb: { xs: 2, md: 0 } }}>
        Delicious Recipes
      </Typography>
      {/* Social Media Links */}
      <Box>
        <IconButton
          aria-label="Facebook"
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#fff' }}
        >
          <FaFacebookF />
        </IconButton>
        <IconButton
          aria-label="Twitter"
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#fff' }}
        >
          <FaTwitter />
        </IconButton>
        <IconButton
          aria-label="Instagram"
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#fff' }}
        >
          <FaInstagram />
        </IconButton>
      </Box>
    </Box>
    <Typography variant="body2" align="center" sx={{ mt: 2 }}>
      &copy; {new Date().getFullYear()} Delicious Recipes. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
