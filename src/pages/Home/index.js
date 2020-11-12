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

//Contexts
// import { MainContext } from '../../contexts/MainContext'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'grey'
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
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
                <Grid item xs={2}>
                    <Paper className={classes.paper}><Nav /></Paper>
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
                    <Paper className={classes.paper}>Body</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>The Internet of Things is all around us and so many technologies are now bundled within its confines. It could include your internet enabled refrigerator in the kitchen to entire cities. Automobiles, the routes they drive on, and the robots that operate them are integrated together on this technological marvel using the IPv6 internet protocol. The IPv6 protocol allows for a vast increase in the number of addresses which are available for these devices to operate independently. Some of these devices are now operating on next-generation data structures, know as blockchains. These blockchains contain immutable data security measures that make it incredibly difficult to modify the contents. This new use case for data ensures that trust is an integral part of the structure. This keeps data accurate and removes the need for centralized control.</Paper>
                </Grid>
            </React.Fragment>
        );
    }

    function FootRow() {
        return (
            <React.Fragment>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>Copyright 2020. All Rights Reserved.</Paper>
                </Grid>
            </React.Fragment>
        );
    }

    function CardRow() {
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    <Paper className={classes.paper}><CA /></Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>Card2</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>Card3</Paper>
                </Grid>
            </React.Fragment>
        );
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3} justify="space-between"
                    alignItems="center">
                    <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <BodyRow />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <CardRow />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <FootRow />
                </Grid>
            </Grid>
        </div>
    );
}


// const bgStyle = {
//     background: "grey",
//     textAlign: "center"
// }
