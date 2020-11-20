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
    flexGrow: 1,
    // maxWidth: 425,
    // margin: "2%",
   
    backgroundColor: "#999"
  },
  media: {
    // width: '100%',
    maxWidth: 265,
    // minWidth: 205,
    margin: "1%",
    height: 130,
    marginLeft: '33%'
    // padding: "1%",
    // backgroundColor: "#DDD"
  },
});