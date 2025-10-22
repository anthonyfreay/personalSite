import React from 'react';

function Loading() {
  return (
    <div style={{ display: 'grid', placeItems: 'center', minHeight: '40vh' }}>
      <div
        aria-label="Loading"
        style={{
          width: 40,
          height: 40,
          border: '3px solid rgba(0,0,0,0.15)',
          borderTopColor: 'rgba(0,0,0,0.7)',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite'
        }}
      />
      <style>{`@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }`}</style>
    </div>
  );
}

export default Loading;
