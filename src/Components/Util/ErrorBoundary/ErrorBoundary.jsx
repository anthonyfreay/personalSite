import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    try {
      // Basic logging; you can replace with a reporting service
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    } catch (e) {}
  }

  render() {
    if (this.state.hasError) {
      const Fallback = this.props.fallback;
      if (Fallback) return <Fallback error={this.state.error} />;
      return (
        <div style={{ padding: '4rem 1rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Something went wrong.</h1>
          <p style={{ marginBottom: '1.5rem' }}>Please try refreshing the page.</p>
          <button onClick={() => window.location.reload()}>Reload</button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
