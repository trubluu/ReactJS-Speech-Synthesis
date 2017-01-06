import React from 'react';
import Speech from './speech';
 
const Message = (props) => {
    const statement = "Design is not just what it looks like and feels like. Design is how it works. Steve Jobs";

    return (
        <div>
            <Speech passMessage={statement}/>
        </div>
    )

}

export default Message;