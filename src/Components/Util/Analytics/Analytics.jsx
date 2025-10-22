import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

// Reads GA4 Measurement ID from Vite env
const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

function Analytics() {
  const location = useLocation();

  // Initialize once
  useEffect(() => {
    if (!MEASUREMENT_ID) {
      if (import.meta.env.DEV) {
        console.warn('GA disabled: missing VITE_GA_MEASUREMENT_ID');
      }
      return;
    }
    if (!window.__GA_INITIALIZED__) {
      ReactGA.initialize([{ trackingId: MEASUREMENT_ID }]);
      window.__GA_INITIALIZED__ = true;
    }
  }, []);

  // Send pageview on route change
  useEffect(() => {
    if (!MEASUREMENT_ID || !window.__GA_INITIALIZED__) return;
    const page = location.pathname + location.search + location.hash;
    ReactGA.send({ hitType: 'pageview', page });
  }, [location.pathname, location.search, location.hash]);

  return null;
}

export default Analytics;
