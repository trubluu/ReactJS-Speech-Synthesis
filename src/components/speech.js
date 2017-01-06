import React from 'react';
import Controls from './controls';
 
const Speech = (props) => {
    const prepareSpeech = () => {
        const defaults = {
            text: props.passMessage,
            lang: 'en-US',
            pitch: '.7',
            rate: '.9',
            volume: '1'
        }

        const speechHandlers = {
            onend: (event) => {
                        console.log('Utterance has finished being spoken after ' + event.elapsedTime + ' seconds.');
                    },
            onerror: (event) => {
                        console.log('An error has occurred with the speech synthesis: ' + event.error);
                    }
        }

        const proclaimThis = new SpeechSynthesisUtterance();

        Object.assign(proclaimThis, defaults, speechHandlers)

        return proclaimThis;
    }

    return (
        <div>
            <Controls passSpeech={prepareSpeech()}/>
        </div>
    )

}

export default Speech;