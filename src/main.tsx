import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

import './styles/global.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/product-cards-app">
      <App />
    </BrowserRouter>
  </StrictMode>,
);
