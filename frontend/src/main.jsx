import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PostProvider } from './context/PostContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <PostProvider>
      <App />
    </PostProvider>
  </BrowserRouter>
)
