import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));
  

const NavBar = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <Link to = "/"><img alt="icon" src="https://img.icons8.com/doodle/48/000000/circled-f--v1.png"/></Link>
              </IconButton>
            <Typography variant="h6" color="inherit">
              Fake Post
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
};

export default NavBar;