import React from 'react';
import Navbar from './Navbar';
import bcloc from '../Images/Untitled_Artwork 6.png';
import './Home.css';

function Home(props) {
    return (
        <>
        <Navbar/>
        <div className='landing-section'>
            <img className='landing-img' src={bcloc}/>
            <h1 className='welcome'>Welcome To Burritos Chiquita</h1>
                <div className='btn-group'>
                    <button className='landing-btn' id='landing-btn1'>Delivery</button>
                    <button className='landing-btn' id='landing-btn2'>Pick Up</button>
                </div>
        </div>
        </>
    );
}

export default Home;