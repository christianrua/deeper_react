import React from 'react';

import './componentsStyles.css';

const UserInput= (props) => {
    return (
    <div className="assigment">
        <input type="text" onChange={props.changed} value={props.defaultValue} />
    </div>
    )};

export default UserInput;