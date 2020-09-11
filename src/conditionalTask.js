import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLogged: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { isLogged } = this.state;
    this.setState({ isLogged: !this.state.isLogged });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isLogged ? "Log in" : "Log out"}
        </button>
        {this.state.isLogged ? "logged in" : "Logged out"}
      </div>
    );
  }
}

export default App;
