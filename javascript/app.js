/*app uses the revealing module pattern*/

/*
useful documentation

https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video

// updating range value
https://stackoverflow.com/questions/19625334/range-slider-event-handler-javascript#19625696

volume change event
https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/volumechange_event

// muted
https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/muted

// volume
https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/volume


// HTMLMediaElement
https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
 */


/*TODO
1. get video working
    - play pause functionality
    - volume functionality
        - click on volume icon will mute &
            replace the current icon w/ a muted icon
        - range slider to adjust the volume
    - fullscreen functionality
        - when you click the icon or hit the f key

2. track bar functionality

3. render the current video description

4. render all the correct video data(thumbnail, title, author)

5. when you click on a video in the suggest video...
    - replace the video src w/ this video file
    - replace the description data
      w/ the current videos description data
    - In the suggest video section apply the
      active class to the currently selected video
*/



















/*app code starts here*/
import VideoSection from "./modules/video-section.js";

VideoSection.init();