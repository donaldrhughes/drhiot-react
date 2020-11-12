import React from 'react';
import logo from '../../../assets/images/drh-logo.png'

//Components
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardMedia } from '@material-ui/core/';


const useStyles = makeStyles({
  root: {
    maxWidth: 225,
  },
  media: {
    width: 200,
    maxWidth: 200,
    height: 100,
  },
});

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