import React from 'react'
import LevelContainer from './LevelContainer'


function LevelMenu() {
    // Use state (hooks)

    // Use effect - load levels

    // Functions - levels logic
    let tricks = [
        {
        id: 1,
        trickName:"Ollie"
    }, {
        id: 2,
        trickName:"Pop-Shuvit"
    }, {
        id: 3,
        trickName:"Kickflip"
    }]
    return ( <div>
        <div > LevelMenu </div> 
        <h1>Beginer</h1>
        {tricks.map(trick=> (
            <LevelContainer trick={trick}/>
        ))}
        </div>
    )
}

export default LevelMenu