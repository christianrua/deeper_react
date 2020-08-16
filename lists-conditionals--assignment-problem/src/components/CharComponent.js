import React from 'react';
import './components.css'

const CharComponent = (props) => {
    return (
        <div className="charComponent" onClick={props.click}>
            {props.letter}

        </div>
    )
}

export default CharComponent;