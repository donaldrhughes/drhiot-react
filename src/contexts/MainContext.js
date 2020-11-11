import React, { createContext, Component } from 'react';

//Create the Main Context
export const MainContext = createContext();

//The "Context"
class MainProvider extends Component {

    state = {
        config: {},
    }
    updateConfig = (config) => {
        this.setState({ config: config })
    }

    render() {
        return (
            <MainContext.Provider value={{
                ...this.state, updateConfig: this.updateConfig,
            }}>
                {this.props.children}
            </MainContext.Provider>
        );
    }
}

export default MainProvider