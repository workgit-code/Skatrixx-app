import {React, useState, useEffect} from 'react'
import {getProfileName, getProfileImage} from "../services"

import "../stylesheets/Profile.css"

import userTabImg from "../images/Person.png"
import friendTabImg from "../images/Friends.png"
import skateTabImg from "../images/Skateboard.png"
import profilePic from "../images/profile-picture.png"

import ProgressBar from './ProgressBar'
import ProfileRankings from './ProfileRankings'
import Achievements from './Achievements'
import FriendList from './FriendList'
import Login from './Login'

import Success from './Success'
import firebase from '../services/firebase';

function Profile() {

    const [profileName, setProfileName] = useState(getProfileName);
    const [profileImage, setProfileImage] = useState(profilePic)
    const [openedTab, setOpenedTab] = useState('Me');
    

    const handleTabChange = (tab) => {
        if(tab === 'Me') {
            document.getElementById('tabs-me').style.backgroundColor = '#CF2121';
            document.getElementById('tabs-friends').style.backgroundColor = '#1E1E1E';
            document.getElementById('tabs-gallery').style.backgroundColor = '#1E1E1E';
            setOpenedTab('Me')
        }
        else if(tab === 'Friends') {
            document.getElementById('tabs-me').style.backgroundColor = '#1E1E1E';
            document.getElementById('tabs-friends').style.backgroundColor = '#CF2121';
            document.getElementById('tabs-gallery').style.backgroundColor = '#1E1E1E';
            setOpenedTab('Friends')
        }
        else if(tab === 'Gallery') {
            document.getElementById('tabs-me').style.backgroundColor = '#1E1E1E';
            document.getElementById('tabs-friends').style.backgroundColor = '#1E1E1E';
            document.getElementById('tabs-gallery').style.backgroundColor = '#CF2121';
            setOpenedTab('Gallery')
        }
    }

    const displayOpenedTab = () => {
        if(openedTab === 'Me') {
            return(
                <div className='me-tab'>
                    <ProfileRankings/>
                    <Achievements/>
                </div>
            )
        }
        else if(openedTab === 'Friends') {
            return(
                <div className='friends-tab'>
                    <FriendList/>
                </div>
            )
        }
        else if(openedTab === 'Gallery') {
            return(
                <>Gallery</>
            )
        }
    }

    const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  console.log(user);

    return (
        <div className='profile'>
            <div id='profile-card'>
                <img src={profileImage} alt='' />
                <div id='additional-information'>
                    <p>{profileName}</p>
                    <ProgressBar/>
                </div>
            </div>
            <div id='tabs'>
                <button onClick={() => {handleTabChange('Me')}} id='tabs-me'>
                    <img src={userTabImg} alt=''/>
                </button>
                <button onClick={() => {handleTabChange('Friends')}} id='tabs-friends'>
                    <img src={friendTabImg}alt=''/>
                </button>
                <button onClick={() => {handleTabChange('Gallery')}} id='tabs-gallery'>
                <img src={skateTabImg}alt=''/>
                </button>
                {user ? <Success user={user} /> : <Login />}
            </div>
<br/>
            {displayOpenedTab()}
        </div>
    )
}

export default Profile
