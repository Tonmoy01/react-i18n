import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './utils/i18n';
import './index.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback='loading...'>
      <App />
    </Suspense>
  </StrictMode>,
);
