// src/components/TestimonialsCarousel.js
import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const TestimonialsCarousel = ({ testimonials }) => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" align="center" gutterBottom>
        What Our Users Say
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '20px',
                borderRadius: '10px',
                backgroundColor: '#fff',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h6" component="p" gutterBottom>
                &quot;{testimonial.quote}&quot;
              </Typography>
              <Typography variant="subtitle1" component="p" align="right">
                - {testimonial.author}
              </Typography>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

TestimonialsCarousel.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TestimonialsCarousel;
