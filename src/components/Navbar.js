import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  // updates the state for the menu icon click
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true);
//sets the click to always switch from false to true for mobile menu
  const handleClick = () => setClick(!click);
  //sets the click to close the menu in mobile
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
// fixes this weird annoying problem of the sign up button showing up outside the mobile menu
  useEffect(() => {
    showButton();
  }, []);
// listen to the window size if it moves to the mobile size. 
  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            JustGO
            <i class="fas fa-plane-departure"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {/* if clicked the icon changes back and forth */}
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          {/* if clicked makes nav menu disapear in mobile */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {/* creates link to pages, the click makes the mobile menu close */}
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;