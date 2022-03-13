import React, { useState, useEffect } from 'react'

import "../stylesheets/Achievements.css"

import badge1 from "../images/badges/Badge1.png"
import badge2 from "../images/badges/Badge2.png"
import badge3 from "../images/badges/Badge3.png"
import badge4 from "../images/badges/Badge4.png"
import badge5 from "../images/badges/Badge5.png"
import badge6 from "../images/badges/Badge6.png"
import AchievementContainer from './AchievementContainer'

function Achievements() {

    const achievements = [
        0,
        1,
        2,
        3
    ]

    const [viewedAchievement, setViewedAchievement]  = useState();
    const [nextAcievement, setNextAchievement] = useState();
    const [prevAcievement, setPrevAchievement] = useState();
    const [viewedAchievementIndex, setViewedAchievementIndex] = useState(0);

    useEffect(() => {
        if(achievements.length === 1) {
            setViewedAchievement(achievements[0]);
            setPrevAchievement(undefined);
            setNextAchievement(undefined);
        }
        else if(achievements.length === 0) {
            setViewedAchievement(undefined);
            setPrevAchievement(undefined);
            setNextAchievement(undefined);
        }
        else {
            setViewedAchievement(achievements[0]);
            setPrevAchievement(achievements.length - 1);
            setNextAchievement(achievements[1]);
        }
      }, []);

      const changeAchievement = (position) => {
        if(position === 'forward') {
            if((viewedAchievementIndex) === achievements.length - 1) {
                const newIndex = 0
                setViewedAchievementIndex(newIndex); 
                setViewedAchievement(achievements[newIndex]);
            }
            else {
                const newIndex = viewedAchievementIndex + 1;
                setViewedAchievementIndex(newIndex);
                setViewedAchievement(achievements[newIndex]);
            }
        }
        else if(position === 'backward') {
            if(viewedAchievementIndex === 0) {
                const newIndex = achievements.length - 1;
                setViewedAchievementIndex(newIndex); 
                setViewedAchievement(achievements[newIndex]);
            }
            else {
                const newIndex = viewedAchievementIndex - 1;
                setViewedAchievementIndex(newIndex);
                setViewedAchievement(achievements[newIndex]);
            }
        }
    }

  return (
    <div className='achievements'>
        <p>Achievements</p>
        <div id='rotator-wheel'>
            <button className='selector' id='prev' onClick={() => {changeAchievement('backward')}}><i className="fa-solid fa-circle-left"></i></button>
            <div id='previous-achievement'>
                <AchievementContainer img={prevAcievement}/>
            </div>
            <AchievementContainer img={viewedAchievement}/>
            <div id='next-achievement'>
                <AchievementContainer img={nextAcievement}/>
            </div>

            <button className='selector' id='next' onClick={() => {changeAchievement('forward')}}><i className="fa-solid fa-circle-right"></i></button>
        </div>
    </div>
  )
}

export default Achievements
