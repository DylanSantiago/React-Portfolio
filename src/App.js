import './App.css';
import Portfolio from './components/pages/portfolio';
import Resume from './components/pages/resume';
import Navbar from './components/nav';
import Contact from './components/pages/contact';
import Me from './components/pages/me';
import React, { useState } from 'react';
export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Me />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
        return <Resume />;
    }
    return <Contact />;
  };
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
    <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
    {renderPage()}
  </div>
  )
}