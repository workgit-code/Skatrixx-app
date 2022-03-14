import React, { useState } from 'react'

import "../stylesheets/FriendList.css"
import backgroundImg from  "../images/skate1 2.png"
import friendImg from "../images/profile-picture.png"
 
function FriendContainer(props) {

  const [friend, setFriend] = useState(props.friend)

  return (
    <div className='friend-container'>
        <div id='friend-info'>
            <img id='friend-img' src={friendImg} alt=''/>
            <p id='friend-name'>{friend.name}</p>
        </div>
        <img id='bg-img' src={backgroundImg} alt=''/>
    </div>
  )
}

export default FriendContainer