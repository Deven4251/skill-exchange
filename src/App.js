import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FaGraduationCap } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">Logo</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Skills</li>
          <li>Lets Discuss</li>
          <li>Chat</li>
          <li>Signup/Login</li>
          <li>Profile</li>
        </ul>
      </nav>


<div className="container-fluid P-5">
        <div className="row P-5">
          <div className="col-md-6 p-5">
          <FaGraduationCap className="cap-icon" />
          </div>
          <div className="col-md-6 p-5">
          <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <span className="highlight"> Sed do eiusmod tempor incididunt ut labore et dolore </span>
          magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
          <span className="highlight"> maecenas accumsan lacus </span>
          vel facilisis. Lorem donec massa sapien faucibus et molestie ac feugiat. Sed lectus
          vestibulum mattis ullamcorper velit sed.
        </p>
          </div>
        </div>
        </div>
    </div>
  );
};

export default HomePage;
