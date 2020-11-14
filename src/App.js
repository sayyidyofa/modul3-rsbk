import React from 'react';
import './App.css';
import Parent from "./modul3/Parent";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <p>Oyakodon</p>
        <Parent />
      </div>
    )
  }
}
export default App;