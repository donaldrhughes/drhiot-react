import React from 'react';
import image from '../../../assets/images/Wifi.png'

//Components
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, 
  // Button, 
  Typography } from '@material-ui/core/';


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
          title="Image"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Web and Mobile
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Full Stack Development and Database Design are the essential technology components to successfully completing milestones for Clients. Web and Mobile projects are welcomed!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
  );
}