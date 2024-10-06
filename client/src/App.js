// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Register from './components/Register'; // <-- Импортируем Register.js
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} /> {/* <-- Добавляем маршрут */}
      </Routes>
    </Router>
  );
}

export default App;

