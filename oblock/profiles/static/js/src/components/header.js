import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
    render () {
        return (
            <header className="masthead">
              <div className="container">
                <div className="intro-text">
                  <div className="intro-lead-in">Your clients. Closer to you.</div>
                  <div className="intro-heading">OBLOCK</div>
                  <a className="btn btn-xl js-scroll-trigger" href="#services">Tell Me More</a>
                    <Link to="/sign-up" className="btn btn-xl">Register</Link>
                </div>
              </div>
            </header>
        )
    }
}