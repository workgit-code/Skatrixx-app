import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import "../stylesheets/NavBar.css";
import skateIcon from "../images/skate-icon.png";

function NavBar() {
    var btns = document.getElementsByClassName("nav-icon");

    useEffect(() => {
        setActiveBtn2();
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

    const setActiveBtn2 = (button) => {
      if(button === 'Profile') {
          document.getElementById("trophy").style.color = "white"
          document.getElementById("profile").style.color = "#CF2121"
          document.getElementById("skate").style.filter = ""
      }
      else if (button === 'Trophy') {
        document.getElementById("trophy").style.color = "#CF2121"
        document.getElementById("profile").style.color = "white"
        document.getElementById("skate").style.filter = ""
      }
      else if (button === 'Skate') {
        document.getElementById("trophy").style.color = "white"
        document.getElementById("profile").style.color = "white"
        document.getElementById("skate").style.filter = "saturate(7495%)"
      }
  }

  return (
    <div className='nav'>
        <Link to={"/trophy"}><i onClick={() => setActiveBtn2('Trophy')} id="trophy" className='fas fa-trophy nav-icon'></i></Link>
        <div id='center'>
            <Link to={"/skate"}><img onClick={() => setActiveBtn2('Skate')} id="skate" className={'nav-icon-center'} src={skateIcon} alt=''/></Link>
        </div>
        <Link to={"/"}><i onClick={() => setActiveBtn2('Profile')} id="profile" className='fas fa-user-alt nav-icon active'></i></Link>
            
            
            
    </div>
  )
}

export default NavBar