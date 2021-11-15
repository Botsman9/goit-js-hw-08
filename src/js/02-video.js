


import Player from '@vimeo/player';

import  throttle  from 'lodash.throttle'
 

const player = new Player(document.querySelector("#vimeo-player"));


 
    
player.on('timeupdate', throttle(saveTime, 1000));



const savedSettings = localStorage.getItem("videoplayer-current-time");
const parsedSettings = JSON.parse(savedSettings);
 
player.setCurrentTime(parsedSettings)

function saveTime(data) {
 
localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds))

}


