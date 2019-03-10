import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    display: 'flex',
    alignItems: 'center'
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
});

function BottomAppBar(props) {
  const { classes } = props;

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" color="secondary" className={classes.grow}>
          {props.state.message}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

BottomAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomAppBar);

