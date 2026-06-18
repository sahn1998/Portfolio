import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

const container = document.getElementById('root');
if (!container) throw new Error('Root container is missing in index.html');
const root = createRoot(container);

console.log('✅ index.tsx is running');

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);