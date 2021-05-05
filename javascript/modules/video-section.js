
// modules
import VideoControls from "./video-controls.js";
import Videos from "../data/videos.js"


const VideoSection = ( _ => {
    // state
    let suggestedVideosEl = document.querySelector(".suggested-videos");
    let currentVideo = document.querySelector(".video");



    const init = _ => {
        render()
    }

    const defaultActiveVideo = _ => {
        suggestedVideosEl.children[0].classList.add("video--active")
    }

    const removeActiveFromVideos = _ => {
        Array.from(suggestedVideosEl.children).forEach((item) => {
            item.classList.remove("video--active")
        })
    }

    const changeVideoFunctionality = (event) => {
         // 1. select a video
        let clickedVideo = event.target.closest(".suggested-video");
        let clickedVideoId = Number(clickedVideo.id);
        let descriptionThumbnail = document.querySelector(".video__description__thumbnail");
        let descriptionTitle = document.querySelector(".video__description__title");
        let descriptionAuthor = document.querySelector(".video__description__author");
        let descriptionGenre = document.querySelector(".description__genre");
        let descriptionLength = document.querySelector(".description__length");


        removeActiveFromVideos()
        // 2. get the Video data for that video
        Videos.forEach((item) => {

            if(clickedVideoId === item.id) {
                // change video
                currentVideo.src= `./videos/${item.fileLocation.slice(13)}`;

                // change video description
                descriptionThumbnail.src = item.thumbnail;
                descriptionTitle.innerHTML = item.title;
                descriptionAuthor.innerHTML = item.author;
                descriptionGenre.innerHTML = item.genre;
                descriptionLength.innerHTML = item.duration;

                // apply active class to the current item
                clickedVideo.classList.add("video--active")

            }
        });
    }



    const listeners = _ => {
        // play / pause
        VideoControls.playPauseIconEl.addEventListener("click", VideoControls.playPauseFunctionality);
        VideoControls.videoEl.addEventListener("ended", VideoControls.videoEnded);
        VideoControls.videoEl.addEventListener("click", VideoControls.playPauseFunctionality);
        // volume mute
        VideoControls.volumeIconEl.addEventListener("click", VideoControls.toggleVolume);
        // volume slider
        VideoControls.volumeInputEl.addEventListener("input", VideoControls.volumeSliderFunctionality);
        // fullscreen
        VideoControls.fullscreenIconEl.addEventListener("click", VideoControls.fullscreenFunctionality);
        // progress bar
        VideoControls.videoEl.addEventListener("timeupdate", VideoControls.progressBarFunctionality);
        // select video functionality
        suggestedVideosEl.addEventListener("click", changeVideoFunctionality);
    }

    const render = _ => {
        VideoControls.init()
        renderSuggestedVideo()
        defaultActiveVideo()

        listeners()
    }


    const renderSuggestedVideo = _ => {
        let markup = "";

        Videos.forEach((item, index) => {
            markup += `
            <li class="suggested-video" id="${index + 1}">
                <img class="suggested-video__thumbnail" src="${item.thumbnail}" alt="suggested video thumbnail">
                <div>
                    <h2 class="video__title suggested-video__title">${item.title}</h2>
                    <h3 class="video__author suggested-video__author">${item.author}</h3>
                    <div>
                        <span class="suggested-video__genre">${item.genre}</span>
                        <span class="suggested-video__duration">${item.duration}</span>
                    </div>
                </div>
            </li>
            `
        });

        suggestedVideosEl.innerHTML = markup;
    }


    return {
        init,
    }
})();

export default VideoSection;