import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:'1', name: 'Max', age: 28 },
      { id:'2', name: 'Manu', age: 29 },
      { id:'3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

 deletePersonHandler = (personIndex) => {
  //const newPersons = this.state.persons.slice(); //slice copy the original array
  const newPersons = [...this.state.persons] // same as above
  newPersons.splice(personIndex,1); //it just erase a element in the array with the index given
  this.setState({persons:newPersons});
}

  nameChagedHandler = (event, id) => {
    
    const personIndex = this.state.persons.findIndex(personElement => {
      return personElement.id === id;
    });

    const personUpdate = {
      ...this.state.persons[personIndex]
    };

    personUpdate.name = event.target.value;

    const personsArrayCopy = [...this.state.persons]

    personsArrayCopy[personIndex] = personUpdate

    this.setState( {persons: personsArrayCopy});

  }

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow 
    });
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
    
    let personsContainer = null; //this is a variable
    if(this.state.showPersons){
      personsContainer = (
        <div >
        {this.state.persons.map((person, index) => {
          return <Person 
                    click = {() => this.deletePersonHandler(index)}
                    name = {person.name}
                    age = {person.age}
                    key = {person.id} 
                    changed = {(event) => this.nameChagedHandler(event, person.id)}
                  />
        })} {/* here persons is a key of the state dict*/}
        </div> 
      );
    }
    
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button  
        style = {style}
        onClick={this.tooglePersonsHandler}>Toogle persons</button> 
       {/* { this.state.showPersons ? 'Hi' : null } //this is like a if statement */}
        
        {personsContainer}
      
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