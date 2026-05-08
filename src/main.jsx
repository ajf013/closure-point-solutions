import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Cache Busting Trigger - Force reload once for v2.2
const APP_VERSION = '2.2';
if (localStorage.getItem('app_version') !== APP_VERSION) {
    localStorage.clear();
    localStorage.setItem('app_version', APP_VERSION);
    window.location.reload();
}

createRoot(document.getElementById('root')).render(
    <App />
)
