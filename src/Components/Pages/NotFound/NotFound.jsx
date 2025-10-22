import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ padding: '4rem 1rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>404 - Page Not Found</h1>
      <p style={{ marginBottom: '1.5rem' }}>The page you’re looking for doesn’t exist.</p>
      <Link to="/" style={{ textDecoration: 'underline' }}>Go back home</Link>
    </div>
  );
}

export default NotFound;
