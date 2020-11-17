//React Router Main
//==========================================
//!Keep this page as lean as possible...
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import MainContextProvider from './contexts/MainContext';
import { MainContext } from './contexts/MainContext'

//Screens
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
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
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/about" component={About} />
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
