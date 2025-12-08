import React from 'react';
import './Skills.css';
import '../App.css';
import { Link } from 'react-router-dom';

const Skills = () => {
  return (
    <div className='skills'>
      <div className='menu'>
        <div className='logo'>Ann Kiende</div>
        <div className='links'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/skills' className='a-active'>
            Skills
          </Link>
        </div>
      </div>

      <h1 className='skills-header'>My Skills</h1>

      <div className='skills-main'>
        {/* CARD 1 */}
        <div className='card'>
          <p className='title'>Technologies</p>
          <ul>
            <li>React</li>
            <li>JavaScript (ES6)</li>
            <li>HTML / CSS</li>
            <li>Vite</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

        {/* CARD 2 */}
        <div className='card'>
          <p className='title'>Soft Skills</p>
          <ul>
            <li>Attention to detail</li>
            <li>Clear communication</li>
            <li>Fast learning</li>
            <li>UI sense / good design eye</li>
          </ul>
        </div>

        {/* CARD 3 */}
        <div className='card'>
          <p className='title'>Currently Learning</p>
          <ul>
            <li>Responsive layouts</li>
            <li>React hooks</li>
            <li>Animations</li>
            <li>UI patterns</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
