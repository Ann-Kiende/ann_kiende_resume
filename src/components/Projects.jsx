import React from 'react';
import './Projects.css';
import '../App.css';
import { Link, Links } from 'react-router-dom';
import bgVideo from '../videos/background-video.mp4';

const Projects = () => {
  return (
    <div className='projects'>
      <video className='bg-video' autoPlay muted loop playsInline>
        <source src={bgVideo} type='video/mp4' />
      </video>

      <div className='menu'>
        <div className='logo'>Ann Kiende</div>
        <div className='links'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/projects' className='a-active'>
            Projects
          </Link>
          <Link to='/skills'>Skills</Link>
        </div>
      </div>

      <div className='main'>PROJECTS</div>
    </div>
  );
};

export default Projects;
