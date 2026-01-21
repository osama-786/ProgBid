import { createRoot } from 'react-dom/client'
import ReactGA from "react-ga4";
import App from './App.tsx'
import './index.css'

// <--- 2. Initialize GA4 with your ID
ReactGA.initialize("G-QT4EL430C4");

// <--- 3. Send the first pageview event
ReactGA.send({ 
  hitType: "pageview", 
  page: window.location.pathname, 
  title: "Home Page"
});

createRoot(document.getElementById("root")!).render(<App />);