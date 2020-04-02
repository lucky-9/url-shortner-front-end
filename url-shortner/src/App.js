import React, { Component } from 'react';
import InputField from './components/inputField';

class App extends Component {
  state = {  }
  render() { 
    return (
      <>
      <h1 className="heading">Url Shortner</h1> 
      <InputField />
      </>);
  }
}
 
export default App;
