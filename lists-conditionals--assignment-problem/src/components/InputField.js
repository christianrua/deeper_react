import React from 'react';


const InputField = (props) => {
    return (
        <div>
            <input type="text" onChange={props.changed} value={props.text}/>
            <p>{props.text}</p>
            <p>lenght of the text: {props.len}</p>
        </div>
    )
};

export default InputField;



