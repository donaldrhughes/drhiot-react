import React, { createContext, Component } from 'react';
// import { isAuthenticated } from '../assets/js/exports'

//Create the Main Context
export const MainContext = createContext();

class MainProvider extends Component {
    //The "Context"
    state = {
        // message: [],
        // player: {},
        // game: {},
        // userObj: {},
        // auth: isAuthenticated(),
        config: {},
        // heldDice: [],
        // inputArr: [],
        // preConfig: {}
    }
    updateConfig = (config) => {
        this.setState({ config: config })
    }
    // resetContext = () => {
    //     this.setState({
    //         message: [],
    //         player: this.resetPlayer(),
    //         game: {},
    //         userObj: {},
    //         auth: null,
    //         config: {},
    //         heldDice: [],
    //         inputArr: [],
    //         preConfig: {}
    //     })
    // }
    // updateWinner = (winner) => {
    //     this.setState({ winner: winner })
    // }
    // updatePreConfig = (preConfig) => {
    //     this.setState({ preConfig: preConfig })
    // }
    // resetPlayer = () => {
    //     this.setState({ player: {} })
    // }
    // updateUser = (userObj) => {
    //     this.setState({ userObj: userObj })
    // }
    // updateHeldDice = (heldDice) => {
    //     this.setState({ heldDice: heldDice })
    // }
    // updateInputArr = (inputArr) => {
    //     this.setState({ inputArr: inputArr })
    // }
 
    // updateMessage = (message) => {
    //     this.setState({ message: message })
    // };
    // updateAuth = () => {
    //     this.setState({ auth: isAuthenticated() })
    // };
    // updatePlayer = (player) => {
    //     this.setState({ player: player })
    // };
    // updateGame = (game) => {
    //     this.setState({ game: game })
    // };
    render() {
        return (
            <MainContext.Provider value={{
                ...this.state, 
                // updateMessage: this.updateMessage,
                // updateUser: this.updateUser, updatePlayer: this.updatePlayer, updateGame: this.updateGame, 
                // resetContext: this.resetContext, updateAuth: this.updateAuth, updateHeldDice: this.updateHeldDice,
                updateConfig: this.updateConfig, 
                // updateInputArr: this.updateInputArr, updatePreConfig: this.updatePreConfig
            }}>
                {this.props.children}
            </MainContext.Provider>
        );
    }
}

export default MainProvider