import React from 'react';
import Navbar from './Navbar';
import bcloc from '../Images/Untitled_Artwork 6.png';
import './Home.css';

function Home(props) {
    return (
        <>
        <Navbar/>
        <div className='landing-section'>
            <img src={bcloc}/>
            <h1 className='welcome'>Welcome To Burritos Chiquita</h1>
            <button id='landing-btn1'>Delivery</button>
            <button id='landing-btn2'>Pick Up</button>
        </div>
        </>
    );
}

export default Home;