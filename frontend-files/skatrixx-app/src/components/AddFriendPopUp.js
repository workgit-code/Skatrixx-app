import React from 'react'

import "../stylesheets/AddFreindPopUp.css";

import QrIcon from "../images/qr.png"

function AddFriendPopUp(props) {
  return (
    <div className='add-friend-popup'>
        <p onClick={()=> {props.open(false)}} id='close'>X</p>
        <div id='options'>
            <div className='username'>
            <i className='fas fa-user-alt'></i>
                <p>Add with Username</p>
            </div>
            <div id='line'></div>
            <div className='qr'>
                <img src={QrIcon} alt=''/>
                <p>Add with QR</p>
            </div>
        </div>
    </div>
  )
}

export default AddFriendPopUp