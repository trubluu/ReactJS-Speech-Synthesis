import React from 'react';
 
const Controls = (props) => {
    const state = {
        startPlaying: false,
    }

    const speak = () => {
        state.startPlaying = true;
        if(state.startPlaying = true) {
            const preparedSpeech = props.passSpeech;
            window.speechSynthesis.speak(preparedSpeech)
        }
        else {
            return null;
        }
    }

    const pause = () => {
        window.speechSynthesis.pause()
    }

    const resume = () => {
        window.speechSynthesis.resume()
    }

    const cancel = () => {
        window.speechSynthesis.cancel()
    }

    const speakOnClick = () => {
        if(speakOnClick) {
            return speak();
        }
    }

    const pauseOnClick = () => {
        if(pauseOnClick) {
            return pause();
        }
    }

    const resumeOnClick = () => {
        if(resumeOnClick) {
            return resume();
        }
    }

    const cancelOnClick = () => {
        if(cancelOnClick) {
            return cancel();
        }
    }
    
    return (
        <div className="controls">
            <span className="fa fa-play fa-3x" aria-hidden="true" onClick={() => speakOnClick()}></span>
            <span className="fa fa-pause fa-3x" aria-hidden="true" onClick={() => pauseOnClick()}></span>
            <span className="fa fa-stop fa-3x" aria-hidden="true" onClick={() => cancelOnClick()}></span>
        </div>
    )

}

export default Controls;