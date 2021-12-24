import React from 'react';
import logo from "../SinceForeverLogo.jpg";


function navbar() {

  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src={logo} className="logo"/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Schedule Quote</a>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </nav>
  )
}

export default navbar
