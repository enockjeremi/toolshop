import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App/index'
import './index.css'
import Layout from './components/Layout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>,
)
