import React from 'react';
const imageSrc = require('../../../images/logo_white.png');

export default class Header extends React.Component {
    render () {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
              <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top"/>
                    <img src={imageSrc} className="logotype"/>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  Menu
                  <i className="fa fa-bars"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="#services">What We Offer</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="#portfolio">Explore</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        )
    }
}