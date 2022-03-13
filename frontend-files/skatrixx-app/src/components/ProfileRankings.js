import React from 'react'

import "../stylesheets/ProfileRankings.css"

function ProfileRankings() {
  return (
    <div className='profile-rankings'>
        <p>Your Ranking</p>
        <div className='rankings'>
        <div className='ranking'>
            <p className='position'>#2</p>
            <p className='category'>Friends</p>
        </div>
        <div className='ranking'>
            <p className='position'>#203</p>
            <p className='category'>Netherlands</p>
        </div>
        <div className='ranking'>
            <p className='position'>#10005</p>
            <p className='category'>World</p>
        </div>
        </div>
    </div>
  )
}

export default ProfileRankings