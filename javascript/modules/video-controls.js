const VideoControls = (_ => {
    // state
    let defaultVolume = 75;


    // cached variables
    let videoEl = document.querySelector(".video");
    let playPauseIconEl = document.querySelector(".play-pause-icon");
    let volumeIconEl = document.querySelector(".volume-icon");
    let volumeInputEl = document.querySelector(".volume-input");
    let fullscreenIconEl = document.querySelector(".fullscreen-icon");
    let progressBarInner = document.querySelector(".video-progress__inner")


    const init = _ => {
        render()
    }

    const render = _ => {
        // initialize the default volume
        defaultVolumeValue()
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


    const videoEnded = _ => {
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
            // 0.75 is the default volume(0 out of 1)
            videoEl.volume = (defaultVolume / 100);
            /*the input goes from 0 to 100,
            therefore the default for the input would be 75
            (because the default volume is 0.75 out of 1)*/
            volumeInputEl.value = defaultVolume;
        }
    }

    const toggleVolume = _ => {
        toggleVolumeIcons();
        toggleMute();
    }


    const getVolumeSliderValue = _ => {
        return volumeInputEl.value;
    }

    const defaultVolumeValue = _ => {
        // video volume(0.75 out of 1)
        videoEl.volume = (defaultVolume / 100);
        // slider value(75 out of 100)
        volumeInputEl.value = defaultVolume;
    }

    const volumeSliderFunctionality = _ => {
        let sliderValue = Number(getVolumeSliderValue() / 100);
        videoEl.volume = sliderValue;
    }





    /*fullscreen functionality*/
    const toggleFullscreen = _ => {
        videoEl.classList.toggle("inFullscreen");

        if(videoEl.classList.contains("inFullscreen")) {
            videoEl.requestFullscreen();
        } else {
            videoEl.exitFullscreen();
        }
    }

    const fullscreenFunctionality = _ => {
        toggleFullscreen()
    }





    /*progress bar functionality*/
    const calculateCurrentProgress = _ => {
        let videoDuration = videoEl.duration;
        let videoCurrentTime = videoEl.currentTime;

        return (videoCurrentTime / videoDuration) * 100;
    }

    const progressBarFunctionality = _ => {
        progressBarInner.style.width = `${calculateCurrentProgress()}%`;
    }





    return {
        init,
        playPauseIconEl,
        playPauseFunctionality,
        videoEnded,
        volumeIconEl,
        toggleVolume,
        volumeInputEl,
        volumeSliderFunctionality,
        fullscreenIconEl,
        fullscreenFunctionality,
        videoEl,
        progressBarFunctionality,
    }


})();


export default VideoControls;