import React from 'react';
import image from '../../../assets/images/data.jpg'

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
            Continuous Integration
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Communication and maintaining detailed documentation is my secret to success. I am always open to Client's feedback, guidance, and ideas.
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