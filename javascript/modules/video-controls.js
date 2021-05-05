const VideoControls = (_ => {
    // 1. play pause
    // 2. volume
    // 3. fullscreen


    // state
    let isMute = false;
    let currentVolume = 50;
    let isFullscreen = false;


    // cached variables
    let videoEl = document.querySelector(".video");
    let playPauseIconEl = document.querySelector(".play-pause-icon");
    let volumeIconEl = document.querySelector(".volume-icon");
    let volumeInputEl = document.querySelector(".volume-input");
    let fullscreenIconEl = document.querySelector(".fullscreen-icon");


    const init = _ => {
        render()
    }

    const render = _ => {
        // play pause btn
        // playPauseFunctionality()
    }

/*play pause functionality*/
    const togglePlayPause = _ => {
        videoEl.paused ? videoEl.play() : videoEl.pause();
    }

    const togglePlayPauseIcons = _ => {
        if(videoEl.paused) {
            playPauseIconEl.classList.remove("fa-pause");
            playPauseIconEl.classList.add("fa-play");
        } else {
            playPauseIconEl.classList.remove("fa-play");
            playPauseIconEl.classList.add("fa-pause");
        }
    }

    const playPauseFunctionality = _ => {
        togglePlayPause()
        togglePlayPauseIcons()
    }



/*volume functionality*/
const toggleVolumeIcons = _ => {
    if(videoEl.volume > 0) {
        volumeIconEl.classList.remove("fa-volume-up");
        volumeIconEl.classList.add("fa-volume-off");
    } else {
        volumeIconEl.classList.remove("fa-volume-off");
        volumeIconEl.classList.add("fa-volume-up");
    }
}

const toggleMute = _ => {
     if(videoEl.volume > 0) {
         // mute
         videoEl.volume = 0;
         // update the input
         volumeInputEl.value = 0;
     } else {
         // 0.5 is the default volume(0 out of 1)
         videoEl.volume = 0.5;
         /*the input goes from 0 to 100,
         therefore the default for the input would be 50
         (because the default volume is 0.5 out of 1)*/
         volumeInputEl.value = 50;
     }
}

const toggleVolume = _ => {
    toggleVolumeIcons();
    toggleMute();
}

const volumeSliderFunctionality = _ => {
    // volumeInputEl
    console.log("fffffffffffffffff");
}



// fullscreen functionality
const fullscreenFunctionality = _ => {
    console.log("full screen func")
}


    return {
        init,
        playPauseIconEl,
        playPauseFunctionality,
        volumeIconEl,
        toggleVolume,
        volumeInputEl,
        volumeSliderFunctionality,
    }


})();


export default VideoControls;