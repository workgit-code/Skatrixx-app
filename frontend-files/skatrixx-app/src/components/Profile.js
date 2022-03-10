import {React, useState} from 'react'
import { Link } from 'react-router-dom'

import "../stylesheets/Profile.css"

import skateImg from "../images/skate-icon.png"
import profilePicture from "../images/profile-picture.png"
import ProgressBar from './ProgressBar'

function Profile() {

    const [openedTab, setOpenedTab] = useState('Me');

    const handleTabChange = (tab) => {
        if(tab === 'Me') {
            document.getElementById('tabs-me').style.backgroundColor = '#CF2121';
            document.getElementById('tabs-friends').style.backgroundColor = '#666464';
            setOpenedTab('Me')
        }
        else {
            document.getElementById('tabs-me').style.backgroundColor = '#666464';
            document.getElementById('tabs-friends').style.backgroundColor = '#CF2121';
            setOpenedTab('Friends')
        }
    }

    return (
        <div className='profile'>
            <div id='profile-card'>
                <img src={profilePicture} alt='' />
                <div id='additional-information'>
                    <p>Pedro Ramirez</p>
                    <ProgressBar />
                </div>
            </div>
            <div id='tabs'>
                <button onClick={() => {handleTabChange('Me')}} id='tabs-me'>
                    Me
                </button>
                <button onClick={() => {handleTabChange('Friends')}} id='tabs-friends'>
                    Friends
                </button>
            </div>
<br/>
            {openedTab === 'Me' ?             
            <div id='me-tab'>
                <div id='gallery'>
                    <Link to={"/my-boards"} id={'gallery-link'}>
                        <p>View Board Gallery</p>
                        <img src={skateImg} alt='' />
                    </Link>
                </div>
            </div> :
            <div id='friends-tab'>
            
        </div>}
        </div>
    )
}

export default Profile
