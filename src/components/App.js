import React, { Component } from 'react';
import Navbar from './Navbar.js';
import { withTranslation, Trans } from 'react-i18next';

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
                <Trans i18nKey="app.title">
                    Tytuł
                </Trans>
            </div>
          </div>
        );
      }
}

export default withTranslation()(App);