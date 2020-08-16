import React, { Component } from 'react';
import './App.css';
import InputField from './components/InputField';
import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/CharComponent';

class App extends Component {
  state = {
    inputText:{content:'',len:0}
  }

  handleChange = (event) => {

    const newText = event.target.value;
    const newLen = newText.length;


    const inputTextCopy = [...this.state.inputText]
  

    inputTextCopy.content = newText;
    inputTextCopy.len = newLen;

    this.setState({inputText: inputTextCopy});

  }

  deleteCharacter = (charIndex) => {
    const newText = this.state.inputText.content;
    const newLen = this.state.inputText.len;
    const anotherInputText = [...this.state.inputText] // same as above
    const auxArray = newText.split('')
    auxArray.splice(charIndex,1);
    anotherInputText.content =  auxArray.join('');
    anotherInputText.len = newLen;
    this.setState({inputText:anotherInputText});
  }

  render() {

    let charactersContainer = (
      <div>
        {this.state.inputText.content.split('').map((letter, index) => {
          return <CharComponent letter = {letter} 
            key = {index}
            click = {() => this.deleteCharacter(index)}
          />
        })}
      </div>
    );


    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      

      <InputField 
      changed = {this.handleChange} 
      text = {this.state.inputText.content}
      len = {this.state.inputText.len}
      />
      <ValidationComponent
        len = {this.state.inputText.len}
      />
      {charactersContainer}
    </div>
    );
  }
}

export default App;
