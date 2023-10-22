import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    // <header>
    //     <nav>
    //         <Link to="/">Page 1</Link>
    //         <Link to="/page2">Page 2</Link>
    //         <Link to="/page3">Page 3</Link>
    //         <Link to="/about">About</Link>
    //     </nav>
    // </header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/page1">
              Page 1
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/page2">
              Page 2
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/page3">
              Page 3
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
