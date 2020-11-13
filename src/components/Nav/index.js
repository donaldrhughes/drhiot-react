import React from 'react';

//Components
import { Menu, MenuItem, Button } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';


export default function Nav() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.root}>
                Menu
      </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Portfolio</MenuItem>
                <MenuItem onClick={handleClose}>About</MenuItem>
                {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
            </Menu>
        </div>
    )
}

const useStyles = makeStyles({
    root: {
      maxWidth: 200,
      color: "#EEE",
      fontSize: 16
    }
  });