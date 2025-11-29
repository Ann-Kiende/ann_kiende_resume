import React from 'react';
import './Home.css';
import { GoDash } from 'react-icons/go';

const Home = () => {
  return (
    <div className='home-hero'>
      <div className='hero-content'>
        <div className='home-explore'>
          <p id='godash'>
            <GoDash />
          </p>
          <p id='txt-explore'>EXPLORE</p>
        </div>
        <div className='home-name'>
          <div className='f-name'>Ann</div>
          <div className='s-name'>Kiende</div>
        </div>
        <div className='home-footer'>
          <p>NAIROBI - KENYA</p>
          <p>COPYRIGHT &copy; 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
