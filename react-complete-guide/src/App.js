import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {

    state = {
      persons: [
        {name:"Christian", age: 33},
        {name:"Vero", age:31},
        {name: "Stephanie", age: 30}
      ]
    }

   switchNameHandler = () => {
      console.log('Was clicked!');
    }

  render() {
    return (
      <div className="App">
        <h1> Hi, i am a react app</h1>
        <p>Thisi is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>que es esto</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi, i am a react app!!!'))
  }
}

export default App;
