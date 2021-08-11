import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faYoutube, faPinterest, faGithub } from '@fortawesome/free-brands-svg-icons'

function NavBar(props) {
    return (
        <div>
            <nav className="navbar">
                <div className="nav-center">
                    {/* <Link to="/" className="nav-logo">
                        <img src="https://res.cloudinary.com/dl3d3eyto/image/upload/v1628634718/Kortney%20the%20Koding%20Girl/images/logos/K0rtn3y_Th3_K0d1ng_G1rl_dnv1ta.png" alt="logo" />
                    </Link> */}
                    <ul className="nav-links">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/tutorials">Tutorials</Link>
                        </li>
                        <li>
                            <Link to="/lifestyle">Lifestyle</Link>
                        </li>
                        <li>
                            <Link to=""><FontAwesomeIcon icon={faSearch}/></Link>
                        </li>
                        <div className="social-icons">
                            <li>
                                <Link to=""><FontAwesomeIcon icon={faInstagram}/></Link>
                            </li>
                            <li>
                                <Link to=""><FontAwesomeIcon icon={faYoutube}/></Link>
                            </li>
                            <li>
                                <Link to=""><FontAwesomeIcon icon={faPinterest}/></Link>
                            </li>
                            <li>
                                <Link to=""><FontAwesomeIcon icon={faGithub}/></Link>
                            </li>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;