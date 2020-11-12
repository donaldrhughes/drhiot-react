import React from 'react';
import image from '../../../assets/images/communication.jpg'

//Components
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
}); 

export default function CA() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Tech Focus
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          My background is information technology and web design. I have worked in the technology industry for over 20 years on the technical and business sides of the house. I have a passion for continuously learning. My current technology interests are: website security, token authentication, server-side validation, and Etherium smart contracts (Solidity).
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}