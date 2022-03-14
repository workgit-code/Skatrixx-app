const profile = {
    "id" : 1,
    "name" : "Pedro Dimitrov",
    "levelProg" : {
        "level" : 12,
        "progressToNexLvl" : 33 
    },
    "rankings" : {
        "frRank" : 2,
        "conRank" : 46,
        "wrRank" : 4023
    },
    "achievements" : [
        "../images/badges/Badge2.png",
        "../images/badges/Badge3.png",
        "../images/badges/Badge4.png",
        "../images/badges/Badge5.png"
    ],
    "friends": [
        {
            "name" : "pishko Ramirez",
            "level" : 32,
            "progressToNexLvl" : 28,
            "frRank" : 3,
            "nlRank" : 201,
            "wrRank" : 11004,
            "image" : "./images/profile-picture.png"
        },
        {
            "name" : "Go6ko Ramirez",
            "level" : 32,
            "progressToNexLvl" : 28,
            "frRank" : 3,
            "nlRank" : 201,
            "wrRank" : 11004,
            "image" : "./images/profile-picture.png"
        },
        {
            "name" : "Stop PLS",
            "level" : 32,
            "progressToNexLvl" : 28,
            "frRank" : 3,
            "nlRank" : 201,
            "wrRank" : 11004,
            "image" : "./images/profile-picture.png"
        },
        {
            "name" : "Stop Ramirez",
            "level" : 32,
            "progressToNexLvl" : 28,
            "frRank" : 3,
            "nlRank" : 201,
            "wrRank" : 11004,
            "image" : "./images/profile-picture.png"
        },
        {
            "name" : "Kill me",
            "level" : 32,
            "progressToNexLvl" : 28,
            "frRank" : 3,
            "nlRank" : 201,
            "wrRank" : 11004,
            "image" : "./images/profile-picture.png"
        },
        {
            "name" : "pishko Ramirez",
            "level" : 32,
            "progressToNexLvl" : 28,
            "frRank" : 3,
            "nlRank" : 201,
            "wrRank" : 11004,
            "image" : "./images/profile-picture.png"
        },
        {
            "name" : "Go6ko Ramirez",
            "level" : 32,
            "progressToNexLvl" : 28,
            "frRank" : 3,
            "nlRank" : 201,
            "wrRank" : 11004,
            "image" : "./images/profile-picture.png"
        },
        {
            "name" : "sheguvam se",
            "level" : 32,
            "progressToNexLvl" : 28,
            "frRank" : 3,
            "nlRank" : 201,
            "wrRank" : 11004,
            "image" : "./images/profile-picture.png"
        },
        {
            "name" : "Ioan Pi6kofv",
            "level" : 32,
            "progressToNexLvl" : 28,
            "frRank" : 3,
            "nlRank" : 201,
            "wrRank" : 11004,
            "image" : "./images/profile-picture.png"
        },
        {
            "name" : "Angel Ta6a4koff",
            "level" : 32,
            "progressToNexLvl" : 28,
            "frRank" : 3,
            "nlRank" : 201,
            "wrRank" : 11004,
            "image" : "./images/profile-picture.png"
        }
    ],
    "image" : "./images/profile-picture.png"
}

export const getProfileName = () => {
    return profile.name;
}
export const getProfileImage = () => {
    return profile.image;
}

export const getProfileLevel = () => {
    return profile.levelProg;
}

export const getProfileRanking = () => {
    return profile.rankings;
}

export const getProfileAchievements = () => {
    return profile.achievements;
} 

export const getFriends = () => {
    return profile.friends;
}