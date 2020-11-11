import React, { useContext } from 'react';
import "../../App.scss";
import "./home.scss";

//Components
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//Contexts
import { MainContext } from '../../contexts/MainContext'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Home() {
  const classes = useStyles();
  const MC = useContext(MainContext);

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Logo</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>NAV</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Body</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}

// import React, { Component } from "react";


// 
// import { Grid } from '@material-ui/core';
// import { Paper } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

// 


// export default class Home extends Component {
//     static contextType = MainContext;

//     render() {
//         return (
//             <Grid container spacing={1}>
//                 <Grid item xs={4} style={bgStyle}>
//                     1
//         </Grid>
//                 <Grid item xs={4} style={bgStyle}>
//                     2
//         </Grid>
//                 <Grid item xs={4} style={bgStyle}>
//                     3
//         </Grid>
//             </Grid>
//         );
//     }
// }

// const bgStyle = {
//     background: "grey",
//     textAlign: "center"
// }
