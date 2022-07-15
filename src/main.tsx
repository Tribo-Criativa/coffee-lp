import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeContextProvider } from './context/ThemeContext';
import App from './Pages/App';

import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
)
