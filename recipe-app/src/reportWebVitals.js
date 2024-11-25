// src/reportWebVitals.js
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

/**
 * Report web vitals metrics.
 * @param {Function} onPerfEntry - Callback function to handle metrics.
 */
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    onCLS(onPerfEntry); // Cumulative Layout Shift
    onFID(onPerfEntry); // First Input Delay
    onFCP(onPerfEntry); // First Contentful Paint
    onLCP(onPerfEntry); // Largest Contentful Paint
    onTTFB(onPerfEntry); // Time to First Byte
  }
};

export default reportWebVitals;
