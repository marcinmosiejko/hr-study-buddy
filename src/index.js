import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.css';
import Root from 'views/Root';
import { worker } from 'mocks/browser';
import AppProviders from 'providers/AppProviders';

const root = ReactDOM.createRoot(document.getElementById('root'));

worker.start().then(() =>
  root.render(
    <React.StrictMode>
      <AppProviders>
        <Root />
      </AppProviders>
    </React.StrictMode>
  )
);
