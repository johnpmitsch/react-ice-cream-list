import React, { Component } from 'react';
import IceCreamList from './components/iceCreamList';
import './App.css';

const myFlavors = ["mint chocolate chip", "rocky road", "cherry garcia"];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myFlavors: myFlavors,
      value: "",
    }

    this.updateFlavors = this.updateFlavors.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateFlavors(flavor) {
    this.setState({ myFlavors: [...this.state.myFlavors, flavor]}); 
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.updateFlavors(this.state.value);
    this.setState({value: ""});
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <h1>My favorite ice cream flavors</h1>

        <IceCreamList 
          flavors={this.state.myFlavors} />

        <form onSubmit={this.handleSubmit}>
          <label>
            Add Flavor:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
