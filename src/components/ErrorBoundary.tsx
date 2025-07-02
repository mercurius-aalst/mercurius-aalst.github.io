import React from "react";

const ErrorBoundary: React.FC<{ error?: Error }> = ({ error }) => (
  <div style={{
    color: 'var(--red, #b00020)',
    background: '#fff6f6',
    border: '1.5px solid #b00020',
    borderRadius: '1rem',
    padding: '2.5rem 2rem',
    margin: '2rem auto',
    maxWidth: 600,
    textAlign: 'center',
    fontSize: '1.25rem',
    boxShadow: '0 2px 16px rgba(176,0,32,0.07)'
  }}>
    <h2 style={{ fontWeight: 700, marginBottom: '1rem' }}>Er is iets misgegaan</h2>
    <p>Sorry, deze pagina kon niet worden geladen of bestaat niet.</p>
    {error && <pre style={{ marginTop: '1.5rem', color: '#b00020', fontSize: '1rem', whiteSpace: 'pre-wrap' }}>{error.message}</pre>}
    {/* No return to home button here, as requested */}
  </div>
);

export default ErrorBoundary;
