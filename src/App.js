import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from './Login.js';



class App extends Component {
  render() {
    return (
        <Router>
              <div>
              <h1>Redux test</h1>
                

                <Route path="/" exact component={Login} />
                
		        
		        
              </div>
        </Router>
    );
  }
}

export default App;