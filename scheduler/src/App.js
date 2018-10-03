import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import Schedule from './components/Schedule';

const styles = theme => ({
  appBar: {
    width: 'auto',
    minWidth: '24rem',
    backgroundColor: '#333',
  },
  logo__img: {
    width: '5rem'
  },
  layout: {
    width: 'auto',
    marginLeft: '1rem',
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    fontFamily: "'Maven Pro', Verdana, sans-serif",
    color: '#757575',
  },
  app__menu: {
    marginLeft: '14rem',
  }
})

class App extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative" color="default" className={classes.appBar}>
          <Toolbar>
            <img 
              className={classes.logo__img}
              alt="logo"
              src="https://res.cloudinary.com/hqa44lo9i/image/upload/v1534965615/logoNew2Pink_e0ulex.png"
            />
            <IconButton
              className={classes.app__menu}
              aria-label="More"
              aria-owns={open ? 'option-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="option-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>Profile</MenuItem>
              <MenuItem onClick={this.handleClose}>My account</MenuItem>
              <MenuItem onClick={this.handleClose}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <Schedule />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
