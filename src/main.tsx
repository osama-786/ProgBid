import { createRoot, hydrateRoot } from 'react-dom/client'
import ReactGA from "react-ga4";
import App from './App.tsx'
import './index.css'

// 1. Check if we are inside a real browser
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  
  // 2. Initialize GA4 with your ID
  ReactGA.initialize("G-QT4EL430C4");

  // 3. Send the first pageview event
  ReactGA.send({ 
    hitType: "pageview", 
    page: window.location.pathname, 
    title: "Home Page"
  });

  // 4. Safely attach React to the HTML
  const container = document.getElementById("root");
  
  if (container) {
    // If our prerender plugin already built the HTML, "hydrate" it seamlessly
    if (container.hasChildNodes()) {
      hydrateRoot(container, <App />);
    } else {
      // Otherwise, render it from scratch normally
      createRoot(container).render(<App />);
    }
  }
}