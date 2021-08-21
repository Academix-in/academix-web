import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './contexts/AuthContext'
import { ContentProvider } from './contexts/ContentContext';

ReactDOM.render(
  // <React.StrictMode>
    <AuthProvider>
      <ContentProvider>
        <App />
      </ContentProvider>
    </AuthProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
