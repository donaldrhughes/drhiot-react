//React Router Main
//==========================================
//!Keep this page as lean as possible...
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import components
//   !Note: Add components to pages directly unless needed
//:for global state management
import MainContextProvider from './contexts/MainContext';
import { MainContext } from './contexts/MainContext'

//Screen Components (Pages)
import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import About from './pages/About/';

//Main App Component
export default class App extends Component {

  componentDidMount() {
    console.log(`React Version: ${React.version}`)
  }

  //Declare the context
  static contextType = MainContext;

  render() {
    
    return (
      <MainContextProvider>
        <Fragment>
          <Router>
            <Switch>
              <MainContext.Consumer>{(context) => {
                return (
                  <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/profile" component={Profile} />
                  </div>
                )
              }}
              </MainContext.Consumer>
            </Switch>
          </Router>
        </Fragment>
      </MainContextProvider>
    );
  }
}
