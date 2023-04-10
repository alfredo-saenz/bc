import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar(props) {
    const navRef = useRef();

    // This will toggle, when clicked, the nav bar
	const showNavbar = () => {
		navRef.current.classList.toggle('responsive_nav');
    }
    return (
        <>
        <header>
            <img className='navbar-logo' src=''/>
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
			<button className='nav-btn' onClick={showNavbar}>
				<FaBars />
			</button>
        </header>
        </>
    );
}

export default Navbar;