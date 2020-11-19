import React from 'react';
// import React, { useContext } from 'react';
import "../../App.scss";
// import "./about.scss";

//Components
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core/';
import Nav from '../../components/Nav'
import Logo from '../../components/common/Logo'

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

export default function Portfolio() {
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
            </React.Fragment>
        );
    }


    function BodyRow() {
        return (
            <React.Fragment>
                <Grid item xs={12}>
                    <Paper className={classes.header}><b>Portfolio</b></Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.bodyRow}>Specializing in Mobile Information Technology
                    20 years of  IT experience with a passion for successfully completing projects and reliability.
                    Teamwork, communication, and making sure the job gets done right. drhIoT leverages coaching, continuous learning, 
                    requirements gathering and advanced problem solving practices. Strong knowledge of network 
                    infrastructures and project management methodologies. 
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.bodyRow}>
                    </Paper>
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
                    {/* <CardRow/> */}
                </Grid>
                <Grid container item xs={12} spacing={0}>
                    {/* <FootRow /> */}
                </Grid>

            </Grid>
        </div>
    );
}
