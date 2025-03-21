import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './header.css'

const index = () => {
  return (
    <div className='profile-header'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h1>
            <Link className="navbar-brand" to="/">VISHAL KUMAR P S</Link> {/* Use Link instead of <a> */}
          </h1>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/resume">Resume</Link> 
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/project">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/stats">Stats</Link> 
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
    </div>
  )
}

export default index;
