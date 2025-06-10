import React from 'react';

export default function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: 48, fontWeight: 'bold', animation: 'pulse 2s infinite' }}>
        Pokiedex
      </h1>
      <p>Welcome to the ultimate Pokiedex experience!</p>

      <style>{`
        @keyframes pulse {
          0% { color: #0077ff; }
          50% { color: #00c6ff; }
          100% { color: #0077ff; }
        }
      `}</style>
    </div>
  );
}
