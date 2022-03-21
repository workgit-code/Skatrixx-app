import React from 'react'
import LevelContainer from './LevelContainer'

const LevelList = () => {
    const beginnerTricks = [
        {
        id: 1,
        trickName:"Ollie", 
        xp:500
    }, {
        id: 2,
        trickName:"Pop-Shuvit",
        xp:530
    }, {
        id: 3,
        trickName:"Frontside Pop-shuvit",
        xp:560
    },{
        id: 4,
        trickName:"Frontside Pop-shuvit",
        xp:580
    },{
        id: 5,
        trickName:"Heelflip",
        xp:600
    }]
  return (
    <div>
        {beginnerTricks.map(trick=> (
            <LevelContainer trick={trick}/>
        ))}
    </div>
  )
}

export default LevelList