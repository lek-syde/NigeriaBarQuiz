import React, { Component } from 'react';


function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-green py-3 py-lg-2">
        <div className="container">
          <button className="navbar-toggler navbar-toggler-left" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>

          <a className="navbar-brand d-flex align-items-center" href="/">
            <h1>NBQ</h1>
          </a>


          <div className="collapse navbar-collapse py-3" id="navbarSupportedContentUserAccount" >


            <ul className="navbar-nav ml-auto">
            <li className="nav-item ml-lg-2 py-2 py-lg-0"> </li>
            <li className="nav-item ml-lg-2 py-2 py-lg-0"> </li>
            <li className="nav-item ml-lg-2 py-2 py-lg-0 text-right"></li>
            <li className="nav-item ml-lg-2 py-2 py-lg-0 text-right"> </li>
            </ul>

          </div>
        </div>

      </nav>


    </header>
  );
}

export default Header;
