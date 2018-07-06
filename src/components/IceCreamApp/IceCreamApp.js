import React, { Component } from 'react';
import FlavorList from '../FlavorList';

class IceCreamApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.addFlavorToList(this.state.value);
    this.setState({value: ""});
    event.preventDefault();
  }

  render() {
    const { flavors } = this.props;

    return (
      <div className="App">
        <h1>My favorite ice cream flavors</h1>

        <FlavorList 
          flavors={flavors} />

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

export default IceCreamApp;
