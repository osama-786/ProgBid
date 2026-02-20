import { createRoot, hydrateRoot } from 'react-dom/client'
import ReactGA from "react-ga4";
import App from './App.tsx'
import './index.css'

ReactGA.initialize("G-QT4EL430C4");
ReactGA.send({ 
  hitType: "pageview", 
  page: window.location.pathname, 
  title: "Home Page"
});

const container = document.getElementById("root");

if (container?.hasChildNodes()) {
  hydrateRoot(container, <App />);
} else if (container) {
  createRoot(container).render(<App />);
}