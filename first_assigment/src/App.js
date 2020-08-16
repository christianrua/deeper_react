import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput'
import UserOutput from './components/UserOutput'

class App extends Component {

  state = {userName:'a user name'}

  onChangeHandler = (event) => {
    this.setState({userName:event.target.value})
  }

  render() {
    return (
      <div className="App">
        <ol>
          <li>OK - Create TWO new components: UserInput and UserOutput</li>
          <li>OK - UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>OK - Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>OK - Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>OK - Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>OK - Add a method to manipulate the state (=> an event-handler method)</li>
          <li>OK - Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>OK - Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>OK - Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>OK - Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <UserInput changed={this.onChangeHandler} defaultValue={this.state.userName} />
        <UserOutput userName={this.state.userName}/>
      </div>
    );
  }
}

export default App;
