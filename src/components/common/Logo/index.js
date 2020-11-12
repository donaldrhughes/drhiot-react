import React from 'react';
import logo from '../../../assets/images/drh-logo.png'

//Components
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardMedia } from '@material-ui/core/';


const useStyles = makeStyles({
  root: {
    maxWidth: 205,
  },
  media: {
    // width: 200,
    maxWidth: 205,
    // minWidth: 205,
    height: 100,
  },
});

export default function LogoCard() {
  const classes = useStyles();

  return (
    <div>
  
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logo}
          title="Logo"
        />
        
      </CardActionArea>
      

    </div>
  );
}