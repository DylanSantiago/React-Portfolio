import React from 'react';

export default function Navbar({ currentPage, handlePageChange }) {
    return (
      <nav className="">
        <ul className="">
          <li className="">
            <a href = "#home"
               onClick = {() => handlePageChange('Home')}
               className = {currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            >
              About Me
            </a>
          </li>
          <li className="">
            <a href = "#portfolio"
               onClick = {() => handlePageChange('Portfolio')}
               className = {currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </a>
          </li>
          <li className="">
            <a href = "#resume"
               onClick = {() => handlePageChange('Resume')}
               className = {currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </a>
          </li>
          <li className="">
            <a href = "#contact"
               onClick = {() => handlePageChange('Contact')}
               className = {currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }