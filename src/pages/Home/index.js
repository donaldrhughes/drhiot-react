import React from 'react';
// import React, { useContext } from 'react';
import "../../App.scss";
import "./home.scss";

//Components
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core/';
import Nav from '../../components/Nav'
import Logo from '../../components/common/Logo'
import CA from '../../components/common/CA'
import CA2 from '../../components/common/CA2'
import CA3 from '../../components/common/CA3'

//Contexts
// import { MainContext } from '../../contexts/MainContext'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'grey'
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'justify',
        color: theme.palette.text.secondary,
        marginLeft: "2%",
    },
    bodyRow: {
        padding: theme.spacing(1),
        textAlign: 'justify',
        color: theme.palette.text.secondary,
        marginLeft: "2%",
        marginRight: "2%",
        backgroundColor: "lightsteelblue"
    },
    header: {
        textAlign: 'center',
        color: "blue",
        marginRight: 0,
        marginLeft: "1%",
        backgroundColor: "lightskyblue"
    },
    footer: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: "#EEE",
        backgroundColor: "navy"
    },
    footLink: {
        color: "#EEE",
    },
    nav: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        minWidth: 60,
        position: "absolute",
        top: 0,
        right: 0,
        marginRight: "2%",
        marginTop: "1%",
        backgroundColor: "purple"
    }
}));

export default function Home() {
    const classes = useStyles();
    // const MC = useContext(MainContext);

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={6}>
                    <Logo />
                </Grid>
                <Grid item xs={2} >
                    <Paper className={classes.nav}>
                        <Nav />
                    </Paper>
                </Grid>
                {/* <Grid item xs={2}>
                    <Paper className={classes.paper}>Quick</Paper>
                </Grid> */}
            </React.Fragment>
        );
    }

    function BodyRow() {
        return (
            <React.Fragment>
                <Grid item xs={12}>
                    <Paper className={classes.header}><b>Information Technology - Specializing in Mobile Information Technology</b></Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.bodyRow}>
                        <ul>
                            <li>--React / React-Native (Redux / Context, Hooks), Node (Express), AJAX / JSON, Javascript ES6</li>
                            <li>--Oracle Java 8, JQuery, PHP, XML, HTML, SCSS</li>
                            <li> --TypeScript, Cordova, Phonegap, Ionic, Regex,  Python, Angular</li>
                            <li>Object Oriented Programming, Functional Programming, Agile, BIG O(n), Authentication, SaaS, OSI, CLI, Data Structures, TDD, MVC</li>
                        </ul>
                    
                        </Paper>
               </Grid>
            </React.Fragment>
        );
    }

    function FootRow() {
        return (
            <React.Fragment>
                <Grid item xs={12}>
                    <Paper className={classes.footer}>Copyright 2020, drhIoT. All Rights Reserved. Powered by the <a href="http://www.reactjs.org" className={classes.footLink}>React JS Framework.</a></Paper>
                </Grid>
            </React.Fragment>
        );
    }

    function CardRow() {
        return (
            <React.Fragment>
                <Grid item xs={4} >
                    <Paper className={classes.paper}><CA /></Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}><CA2 /></Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}><CA3 /></Paper>
                </Grid>
            </React.Fragment>
        );
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={0} justify="space-between"
                    alignItems="center">
                    <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={1}>
                    <BodyRow />
                </Grid>
                <Grid container item xs={12} spacing={1}>
                    <CardRow/>
                </Grid>
                <Grid container item xs={12} spacing={0}>
                    <FootRow />
                </Grid>
            </Grid>
        </div>
    );
}
