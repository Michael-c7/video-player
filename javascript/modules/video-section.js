/*where the main video player logic will go.
the suggested-videos & track-bar modules, ect..
will be included here.
*/

// modules
import VideoControls from "./video-controls.js";
import Videos from "../data/videos.js"


const VideoSection = ( _ => {
    // state
    let currentVideo = Videos[0].fileLocation;

    // cached variables
    // let videoEl = document.querySelector(".video");
    // console.log(currentVideo)



    const init = _ => {
        render()
    }



    const listeners = _ => {
        // play / pause
        VideoControls.playPauseIconEl.addEventListener("click", VideoControls.playPauseFunctionality);
        VideoControls.videoEl.addEventListener("ended", VideoControls.videoEnded);
        // volume mute
        VideoControls.volumeIconEl.addEventListener("click", VideoControls.toggleVolume);
        // volume slider
        VideoControls.volumeInputEl.addEventListener("input", VideoControls.volumeSliderFunctionality);
        // fullscreen
        VideoControls.fullscreenIconEl.addEventListener("click", VideoControls.fullscreenFunctionality);
        // progress bar
        VideoControls.videoEl.addEventListener("timeupdate", VideoControls.progressBarFunctionality);
    }

    const render = _ => {
        VideoControls.init()

        listeners()
        // console.log(Videos)
        // videoEl.play()

    }


    return {
        init,
    }
})();

export default VideoSection;