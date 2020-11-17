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
                    <Paper className={classes.bodyRow}>The Internet of Things is all around us and so many technologies are now bundled within its confines. It could include your internet enabled refrigerator in the kitchen to entire cities. Automobiles, the routes they drive on, and the robots that operate them are integrated together on this technological marvel using the IPv6 internet protocol. The IPv6 protocol allows for a vast increase in the number of addresses which are available for these devices to operate independently. Some of these devices are now operating on next-generation data structures, know as blockchains. These blockchains contain immutable data security measures that make it incredibly difficult to modify the contents. This new use case for data ensures that trust is an integral part of the structure. This keeps data accurate and removes the need for centralized control.</Paper>
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
