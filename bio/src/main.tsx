import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home.tsx'
import Projects from './pages/projects.tsx';
import './index.css'
import Blog from './pages/blog.tsx';
import About from './pages/about.tsx';
import MessagingQueue from './assets/components/blog1.tsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path='/MessagingQueue' element={<MessagingQueue />} />
      </Routes>
    </BrowserRouter>
  );
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
