import React from 'react';
import { renderToString } from 'react-dom/server';
import { JSDOM } from 'jsdom';

// 1. Create a fake browser window for Node.js BEFORE React loads
const dom = new JSDOM('<!DOCTYPE html><html><body><div id="root"></div></body></html>', {
  url: 'http://localhost'
});
globalThis.window = dom.window as any;
globalThis.document = dom.window.document;
globalThis.navigator = dom.window.navigator;

export async function prerender() {
  // 2. DYNAMICALLY import your App. 
  // This prevents Vite from hoisting the import, ensuring the fake window exists 
  // before Shadcn UI tries to read the `document`.
  const { default: App } = await import('./src/App');
  
  const html = renderToString(<App />);
  return { html };
}