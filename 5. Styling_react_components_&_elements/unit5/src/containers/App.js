import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../components/hoc/Aux';
// import WithClass from '../components/hoc/WithClass';
import withClass from '../components/hoc/withClass';
import AuthContext from '../context/auth-context'



//& sign if for tell the library to include this sudo selector

class App extends Component {

  
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    //you can initialize the state here, in this way this.state = ...
    
  }
  

  state = {
    persons: [
      { id:'1', name: 'Max', age: 28 },
      { id:'2', name: 'Manu', age: 29 },
      { id:'3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }


static getDerivedStateFromProps(props, state) {
  console.log('[App.js] getDerivedStateFromProps', props);
  return state;
}

componentDidMount() {
  console.log('[App.js] componentDidMount');
}

shouldComponentUpdate(nextProps, nextState) {
  console.log('[App.js] shouldComponentUpdate');
  return true;
}

componentDidUpdate() {
  console.log('[App.js] componentDidUpdate');
}



//componentWillMount() {
//  console.log('[App.js] componentDidMount');
//}

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

    const personsArrayCopy = [...this.state.persons];

    personsArrayCopy[personIndex] = personUpdate;

    this.setState((prevState, props) => {
      return {
        persons: personsArrayCopy, 
      changeCounter: prevState.changeCounter + 1
      };
    });

  };

  tooglePersonsHandler = () => {
    console.log("in entering tooglePersonsHandlers");
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow 
    });
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  };
  // this.switchNameHandler('Chris') can be inneficient, avoided. intead use this.switchNameHandler.bind(this, 'Lennin')
  render () {

    console.log('[App.js] render');
    
    let personsContainer = null; //this is a variable
    
    if(this.state.showPersons){
      personsContainer = <Persons 
        persons={this.state.persons} 
        clicked={this.deletePersonHandler} 
        changed={this.nameChagedHandler} 
        isAuthenticated={this.state.authenticated}
        />;
    }

    return (
      
      // <WithClass classes={classes.App}>
      <Aux>
      <button onClick={() => {
        this.setState({showCockpit:false});
      }}>Remove Cockit</button>
      <AuthContext.Provider 
      value ={{authenticated: this.state.authenticated,
      login: this.loginHandler
      }}>
       {this.state.showCockpit ? <Cockpit 
        title={this.props.appTitle}
        showPersons={this.state.showPersons}
        personsLength={this.state.persons.length} 
        clicked={this.tooglePersonsHandler} 
        
        /> : null} 
        {personsContainer}
        </AuthContext.Provider>
      </Aux>
      //  </WithClass>
      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);


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


/*

//in this library we used regular css
const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;


return (
      
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <StyledButton 
        alt = {this.state.showPersons}
        onClick={this.tooglePersonsHandler}>
        Toogle persons
        </StyledButton> 
       {personsContainer}
       </div>
     );
*/

/*

this in include a rapper for the errors.

if(this.state.showPersons){
      personsContainer = (
        <div >
        {this.state.persons.map((person, index) => {
          return <ErrorBoundary key = {person.id}>
                    <Person 
                    click = {() => this.deletePersonHandler(index)}
                    name = {person.name}
                    age = {person.age}
                     
                    changed = {(event) => this.nameChagedHandler(event, person.id)}
                  />
                  </ErrorBoundary>
        })} 
        </div> 
      );
     btnClass = classes.Red
    }



*/