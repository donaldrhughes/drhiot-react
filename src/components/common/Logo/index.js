import React from 'react';
import logo from '../../../assets/images/drh-logo.png'

//Components
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardMedia } from '@material-ui/core/';


export default function LogoCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logo}
          title="Logo"
        />

      </CardActionArea>
    </Card>
  );
}

const useStyles = makeStyles({
  root: {
    maxWidth: 225,
    textAlign: "center",
    margin: "2%",
   
    backgroundColor: "#DDD"
  },
  media: {
    // width: 200,
    maxWidth: 205,
    // minWidth: 205,
    margin: "1%",
    height: 100,
    padding: "1%",
    // backgroundColor: "#DDD"
  },
});