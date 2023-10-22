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
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to="/">
        Home
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link" to="/">
              Page 1
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/page2">
              Page 2
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/page3">
              Page 3
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
