import React from 'react'

import "../stylesheets/Loby.css"

import SIcon from "../images/s-1 1.svg"
import SoloIcon from "../images/Account.svg"
import VersusIcon from "../images/Head to Head.svg"

function Loby() {
  return (
    <div><img src={SIcon} alt='' id= "Sicon" />

    <div><img src={SoloIcon} alt=''  id= "soloIcon"/>
    <h4>Solo</h4></div>
    <div><img src={VersusIcon} alt=''  id= "vsIcon"/>
    <h4>S.K.A.T.E</h4></div>

    </div>
  )
}

export default Loby