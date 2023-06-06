import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HelloWord from './componentes/HelloWord..jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <App/>
    <HelloWord/>
  </React.StrictMode>,
)
