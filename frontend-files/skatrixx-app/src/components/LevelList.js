import {React, useState, useEffect} from 'react'
import LevelContainer from './LevelContainer'
import tricksDataService from '../services/tricksDataService'
import { faHourglass3 } from '@fortawesome/free-solid-svg-icons'



const LevelList = () => {
  const [trickData, setTrickData] = useState([]) // trickData useState
  const [loading, setLoading] = useState(true) //for  Loading
  const [error, setError] = useState(""); // for Error

  //  update Data on component reload
  // on react component loading
  useEffect(() => {
    retrieveTrickData()
  }, [])
  
  // Get skate data (async await axiox data retrieving)
  const retrieveTrickData = async () => {
    setLoading(true)
    try {
      const res = await tricksDataService.getAllTricks()
      setTrickData(res.data)
      // console.log(res.data)
    } 
    catch (err) {
      // console.log(err.message)
      setError("Error occurs while retrieving trick data!")
    }
    setLoading(false)
  }
  return (
    <div>
       {/*if the data is loading too long*/}
    {loading && <div>Loading...</div>}
    {!loading && (
      !error ? (
        <div>
          <h3>Beginner</h3>
          {/* displaying the data from the API */}
        {trickData.map((trick, i) => 
        (
           trick.difficulty === "beginner"?(  <LevelContainer trick={trick} key={i}/>)
          : ""
        )
        )}
      </div>
      )
      :
      (
         /* if there is some error, to inform the user */
        <div>{error}</div>
      )
      
    )}
    </div>
  )
}

export default LevelList