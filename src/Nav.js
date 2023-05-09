import React from 'react';
import './Nav.css';

function Nav() {
  return (
      <nav>
      <a 
      href="https://github.com/VictorReal/" target="_blank">
        <button id="git_btn">My GitHub</button>
      </a>
      <a href="https://victorreal.github.io/cv_dev/"><button id="cv_btn">My CV</button></a>
      <a  href="https://victorreal.github.io/list-of-projects/"><button id="prj_btn">Projects</button></a>
      <div className="content">
        <audio id="myAudio" src="./media/Money_in_the_Bank.mp3"></audio>
        <button id="start-animation-btn">Add fun</button>
        <div className="background hidden"></div>        
      </div>
    </nav>

  );
}

export default Nav;
