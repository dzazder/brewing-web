import React, { Component } from 'react';
import Navbar from './Navbar.js';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

        //this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
          <div className="wrapper">
            <Navbar />

            <div id="content">
                <h1>Hello world!</h1>
            </div>
          </div>
        );
      }
}

export default App;