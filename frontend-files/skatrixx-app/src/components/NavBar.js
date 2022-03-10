import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import "../stylesheets/NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import userIcon from "../images/user-icon.png";
import skateIcon from "../images/skate-icon.png";
import awardIcon from "../images/award-icon.png";

function NavBar() {
    var btns = document.getElementsByClassName("nav-icon");

    useEffect(() => {
        setActiveBtn();
    }, []);


    const setActiveBtn = () => {
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function() {
              var current = document.getElementsByClassName("active");
              current[0].className = current[0].className.replace(" active", "");
              this.className += " active";
            });
          }
    }

  return (
    <div className='nav'>
        <Link to={"/"}><i onClick={setActiveBtn} className='fas fa-trophy nav-icon'></i></Link>
        <div id='center'>
            <Link to={"/"}><img className={'nav-icon-center'} src={skateIcon} alt=''/></Link>
        </div>
        <Link to={"/"}><i onClick={setActiveBtn} className='fas fa-user-alt nav-icon active'></i></Link>
            
            
            
    </div>
  )
}

export default NavBar