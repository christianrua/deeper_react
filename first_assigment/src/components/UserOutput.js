import React from 'react';

import './componentsStyles.css';

const UserOutput= (props) => {
    return (
    <div className="assigment">
        <p>{props.userName}</p>
        <p>this is another paragraph</p>
    </div>
    )};

export default UserOutput;