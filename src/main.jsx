import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './/Components/scripts/App.jsx'
import "./global-styles/reset.scss";
import "./global-styles/main.scss";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
