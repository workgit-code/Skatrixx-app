import React, { useState, useEffect } from 'react'
import { getUserConnections } from '../services/user'
import '../stylesheets/InviteToLobby.css'
import InviteFriendContainer from './InviteFriendContainer'

function InviteToLobby(props) {

    const [friends, setFriends] = useState(undefined)

    const loadFriends = async () => {
        setFriends(await getUserConnections())
      }

      useEffect(() => {
        loadFriends()
      }, [])


  return (
    <div className='invite-popup'>
        <p onClick={props.close}>X</p>
        {friends !== undefined ? friends.map(friend => (
            <InviteFriendContainer connection={friend} lobby={props.lobby}/>
        )) : 'Loading'}
    </div>
  )
}

export default InviteToLobby