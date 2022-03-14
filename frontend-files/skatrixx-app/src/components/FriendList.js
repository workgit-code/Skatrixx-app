import React, { useState } from 'react'
import { getFriends } from '../services';

import "../stylesheets/FriendList.css"
import FriendContainer from './FriendContainer';

function FriendList(props) {

  const [friends, setFriends] = useState(getFriends)

  return (
    <div className='friend-list'>
      {friends.map(friend=> (
            <FriendContainer friend={friend}/>
        ))}
    </div>
  )
}

export default FriendList;
