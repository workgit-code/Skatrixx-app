import React, { useState } from 'react'
import "../stylesheets/CreateSkateLobby.css"

import LobbyMembers from './LobbyMembers';

function CreateSkateLobby() {

    const [maxPlayerCount, setMaxPlayerCount] = useState(2);
    const [lobbyVisibility, setLobbyVisibility] = useState('private')
    let code = "ASDGS"

    const handleChangeMaxPlayerCount = (position) => {
        if(position === 'up' && maxPlayerCount< 10) {setMaxPlayerCount(maxPlayerCount + 1)}
        else if (position === 'down' && maxPlayerCount > 2) {setMaxPlayerCount(maxPlayerCount - 1)}
    }

    const handleLobbyVisibilityChange = (visibility) => {
        setLobbyVisibility(visibility)
        if(visibility === 'private') {
            document.getElementById('private-lobby-visibility').style.backgroundColor = '#CF2121'
            document.getElementById('public-lobby-visibility').style.backgroundColor = '#1e1e1e'
        }
        else if(visibility === 'public') {
            document.getElementById('public-lobby-visibility').style.backgroundColor = '#CF2121'
            document.getElementById('private-lobby-visibility').style.backgroundColor = '#1e1e1e'
        }
    }

  return (
    <div className='create-skate-lobby'>
        <div id='lobby-settings'>
            <div id='visibility-switch'>
                <p onClick={() => handleLobbyVisibilityChange('private')} id='private-lobby-visibility'>Private</p>
                <p onClick={() => handleLobbyVisibilityChange('public')} id='public-lobby-visibility'>Public</p>
            </div>
            <div id='player-limit'>
                <p>Max. players:</p>
                <div id='player-limit-control'>
                    <button onClick={() => handleChangeMaxPlayerCount('up')} style={{opacity : maxPlayerCount<10 ? 1 : .5}} id='player-limit-increase'>+</button>
                    <p id='player-limit-current'>{maxPlayerCount}</p>
                    <button onClick={() => handleChangeMaxPlayerCount('down')} style={{opacity : maxPlayerCount>2 ? 1 : .5}} id='player-limit-decrease'>-</button>
                </div>
            </div>
            <p id='lobby-code-text'>ACCESS CODE<br/> <p id='lobby-code'>{code}</p></p>
        </div>
        <div id='line'></div>
        <div id='lobby-members'>
            <LobbyMembers/>
        </div>
        <div id='recommended-invitations'>

        </div>
    </div>
  )
}

export default CreateSkateLobby