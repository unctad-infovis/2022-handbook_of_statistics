import React from 'react';

import { createRoot } from 'react-dom/client';

import App from './jsx/App.jsx';
import AppES from './jsx/App_es.jsx';

const AppRoot = document.getElementById('app-root-2022-handbook_of_statistics');
if (AppRoot) {
  const root = createRoot(AppRoot);
  root.render(<App />);
}

const AppESRoot = document.getElementById('app-root-2022-handbook_of_statistics_es');
if (AppESRoot) {
  const root = createRoot(AppESRoot);
  root.render(<AppES />);
}
