import logo from './logo.svg';
import './App.css';
import Portfolio from './components/pages/portfolio';
import Resume from './components/pages/resume';
import Navbar from './components/nav';
import Contact from './components/pages/contact';
import Me from './components/pages/me';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route
              path="/"
              element={<Me />}
            />
             <Route
              path="/"
              element={<Portfolio />}
            />
             <Route
              path="/"
              element={<Resume />}
            />
             <Route
              path="/"
              element={<Contact />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  )
}
