import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Login.js";

//import redux libraries
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//import internal selectors and actions
import { auth } from "./Store/Auth/selectors";
import { login } from "./Store/Auth/actions";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Redux test</h1>
          <h1>{JSON.stringify(this.props.auth)}</h1>

          <Route path="/" exact component={Login} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: auth(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: bindActionCreators(login, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
