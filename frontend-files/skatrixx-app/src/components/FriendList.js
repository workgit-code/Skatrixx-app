import React, { useState } from 'react'
import { getFriends } from '../services';

import "../stylesheets/FriendList.css"
import AddFriendPopUp from './AddFriendPopUp';
import FriendContainer from './FriendContainer';

function FriendList(props) {

  const [friends, setFriends] = useState(getFriends);
  const [addFriendPopup, setAddFriendPopup] = useState(false);

  const toggleAddFriendPopup = (state) => {
    setAddFriendPopup(state);
  } 

  return (
    <div className='friend-list'>
      <div onClick={() => {toggleAddFriendPopup(true)}} id='add-friend'>+</div>
      {friends.map(friend=> (
            <FriendContainer friend={friend}/>
        ))}
        {addFriendPopup ? <AddFriendPopUp open={toggleAddFriendPopup}/> : ''}
    </div>
  )
}

export default FriendList;
