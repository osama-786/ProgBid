import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App'; // Adjust this path if your main App file is located elsewhere

export async function prerender() {
  // This uses React's native server engine to instantly generate the HTML string
  const html = renderToString(<App />);
  return { html };
}