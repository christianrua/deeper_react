import React from 'react';

import User from '../../components/User';

const authIndexPage = (props) => (
    <div>
        <h1>The Auth Index Page {props.appName} </h1>
        <User name="Max" age={28}/>
    </div>
);

authIndexPage.getInitalProps = context => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({appName: "Super App - "});
        },1000);
    });
    
    return promise;    
}

export default authIndexPage;