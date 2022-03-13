import React from 'react'

import "../stylesheets/AchievementContainer.css"

function AchievementContainer(props) {
  return (
    <div className='achievement-container'>
        <p>{props.img}</p>
    </div>
  )
}

export default AchievementContainer
