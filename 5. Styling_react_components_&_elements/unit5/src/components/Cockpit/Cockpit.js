import React,{ useEffect, useRef, useContext } from 'react';

import classes from './Cockpit.css';

import AuthContext from '../../context/auth-context';
import authContext from '../../context/auth-context';

const Cockpit = (props) => {

  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);
  

    useEffect(() => {
      console.log('[Cockipt.js] useEffect');
      // const timer = setTimeout(() => {
      //   alert('Saved data to the cloud')
      // }, 1000);
      toggleBtnRef.current.click();
      return () => {
        console.log('[Cockpit.js] cleanup work in useEffect');
      }
    },[]);

    useEffect(() => {
      console.log('[Cockipt.js] 2nd useEffect');
      return () => {
        console.log('[Cockpit.js] cleanup work in 2nd useEffect');
      };
    });
    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons) {
      btnClass = classes.Red
    }
    

    if(props.personsLength <= 2){
      assignedClasses.push(classes.red); //classes = ['red']
    }
    if(props.personsLength <= 1){
      assignedClasses.push(classes.bold); //class = ['red','bold']
    }

    return (
        <div className={classes.Cockpit}>
             <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
            ref={toggleBtnRef}
            className={btnClass}
            onClick={props.clicked}>
            Toogle persons
            </button>
           
            <button onClick={authContext.login}>Log in</button>
           
        </div>
       
    );
};

export default React.memo(Cockpit);