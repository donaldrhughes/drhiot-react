import React, { Component } from "react";
import "../../App.scss";
import "./home.scss";

//Components
import { Grid } from '@material-ui/core';

//Contexts
import { MainContext } from '../../contexts/MainContext'


export default class Home extends Component {
    static contextType = MainContext;

    render() {
        return (
            <Grid container>
                <Grid item xs={4} style={bgStyle}>
                    1
        </Grid>
                <Grid item xs={4} style={bgStyle}>
                    2
        </Grid>
                <Grid item xs={4} style={bgStyle}>
                    3
        </Grid>
            </Grid>
        );
    }
}

const bgStyle = {
    background: "grey",
    textAlign: "center"
}
