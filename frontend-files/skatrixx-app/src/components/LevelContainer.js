import React from 'react'

function LevelContainer(props) {
  return (
    <div>
      <p>{props.trick.trickName}</p>
      <p>{props.trick.xp}</p>
      
      
    </div>
  )
}

export default LevelContainer