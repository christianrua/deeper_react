import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChagedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Christian', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 30 }
      ]
    } )
  }

  // this.switchNameHandler('Chris') can be inneficient, avoided. intead use this.switchNameHandler.bind(this, 'Lennin')
  render () {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button  
        style = {style}
        onClick={() => this.switchNameHandler('Chris')}>Switch Name</button> 
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Lennin')}
          changed = {this.nameChagedHandler}
           >My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;


/*
import React, { useState} from 'react';
import './App.css';
import Person from './Person/Person.js'

const app = props => {

   const [personsState, setPersonsState] =  useState({
      persons: [
        {name:"Christian", age: 33},
        {name:"Vero", age:31},
        {name: "Stephanie", age: 30}
      ],
      otherState: 'some other value'
    });

    const switchNameHandler = (newName) => {
      //console.log('Was clicked!');
      // DON'T DO THIS: this.state.persons[0].name = "Another name";
      setPersonsState({
        persons: [
        {name:newName, age: 33},
        {name:"Vero", age:31},
        {name: "Stephanie", age: 28}
        ],
        otherState: personsState.otherState 
      })
    }

    return (
      <div className="App">
        <h1> Hi, i am a react app</h1>
        <p>Thisi is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}
        click={switchNameHandler}>que es esto</Person>
        <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age} />
        <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age} 
        click={switchNameHandler}
        />
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi, i am a react app!!!'))
  
}

export default app;

*/