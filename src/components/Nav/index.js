import React from 'react';
import { useHistory } from "react-router-dom";

//Components
import { Menu, MenuItem, Button } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';


export default function Nav() {
    let history = useHistory();
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const linkHome = event => {
        event.preventDefault();
        history.push("/");
    };

    const linkAbout = event => {
        event.preventDefault();
        history.push("/about");
    };

    const linkPortfolio = event => {
        event.preventDefault();
        history.push("/portfolio");
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
                onClose={handleClose}>
                <MenuItem onClick={linkHome} type="submit">Home</MenuItem>
                <MenuItem onClick={linkPortfolio} type="submit">Portfolio</MenuItem>
                <MenuItem onClick={linkAbout} type="submit">About</MenuItem>
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