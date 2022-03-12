import React from 'react'

import "../stylesheets/FriendList.css"
import FriendContainer from './FriendContainer';

function FriendList() {

    let friends = [
        "Matt Stonie",
        "Steven Rogers",
        "Го6о Келе6а",
        "Matt Stonie",
        "Steven Rogers",
        "Го6о Келе6а",
        "Matt Stonie",
        "Steven Rogers",
        "Го6о Келе6а",
        "Matt Stonie",
        "Steven Rogers",
        "Го6о Келе6а"
    ]

  return (
    <div className='friend-list'>
        {friends.map(friend=> (
            <FriendContainer name={friend}/>
        ))}
    </div>
  )
}

export default FriendList;
