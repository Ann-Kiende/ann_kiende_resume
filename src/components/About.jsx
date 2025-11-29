import React from 'react';
import './About.css';
import { HiOutlineMail } from 'react-icons/hi';
import { IoLocationSharp, IoLogoLinkedin } from 'react-icons/io5';
import { BsGithub, BsFileEarmarkPdfFill } from 'react-icons/bs';
import { Link, Links } from 'react-router-dom';
import bgVideo from '../videos/background-video.mp4';
import myPic from '../images/ann-kiende-graduation.jpeg';
import { BiFontSize } from 'react-icons/bi';

const About = () => {
  return (
    <div className='about'>
      <div className='menu'>
        <div className='logo'>Ann Kiende</div>
        <div className='links'>
          <Link to='/'>Home</Link>
          <Link to='/about' class='a-active'>
            About
          </Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/skills'>Skills</Link>
        </div>
      </div>

      <div className='main about-main'>
        <div className='top-section'>
          <div className='ann-picture'>
            <img src={myPic} alt='Ann Kiende' />
          </div>
          <div className='desc'>
            I’m Ann Kiende — a <strong>frontend developer</strong> based in
            Nairobi, passionate about turning ideas into clean, intuitive
            digital experiences. I specialize in{' '}
            <strong>React, JavaScript, and modern UI design,</strong> with a
            strong focus on{' '}
            <strong>clarity, simplicity, and user-centered interfaces.</strong>{' '}
            I enjoy crafting{' '}
            <strong>
              elegant, responsive layouts, writing minimal and maintainable
              code,
            </strong>{' '}
            and bringing products to life with thoughtful design decisions. I
            approach every project with a balance of{' '}
            <strong>creativity and technical precision</strong>, aiming to build
            interfaces that not only look beautiful but also feel effortless to
            use. As a fast learner with a sharp eye for detail, I’m driven by
            continuous improvement and the challenge of{' '}
            <strong>
              transforming complex problems into smooth, polished, real-world
              solutions.
            </strong>
            <p>
              Currently in: <strong>Nairobi, Kenya</strong>
            </p>
            <p>
              My Email: <strong>annkiende30@gmail.com</strong>
            </p>
          </div>
        </div>

        <div className='contact'>
          <div id='email' className='icons'>
            <HiOutlineMail />
          </div>
          <div id='github' className='icons'>
            <BsGithub />
          </div>
          <div id='linkedin' className='icons'>
            <IoLogoLinkedin />
          </div>
          <div id='resume-pdf' className='icons'>
            <BsFileEarmarkPdfFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
