import React from 'react';
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react'
import Homelogo from '../Images/Untitled_Artwork 7.png'

function Navbar(props) {
    const navRef = useRef();

    // This will toggle, when clicked, the nav bar
	const showNavbar = () => {
		navRef.current.classList.toggle('responsive_nav');
    }
    return (
        <>
        <header>
            <div className='navbar-logo'>
            <img  className='homelogo' src={Homelogo}/>

			<button className='nav-btn nav-open-btn' onClick={showNavbar}>
				<FaBars />
			</button>
            </div>
                {/* <img className='homelogo' src={Homelogo}/> */}
            <nav className='navbar' ref={navRef}>
                <a>About</a>
                <a>Location</a>
                <a>Find Us</a>
                <a>Order Now</a>

                {/* This is the closing button and will appear when the nav bar is open */}
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
					<FaTimes />
				</button>
			
            </nav>
            {/* This is the hamburger button for the navbar */}
        </header>
        </>
    );
}

export default Navbar;