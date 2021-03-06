import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import typeWriter from '../typewriter';

const styles = {
  root: {
    paddingTop: '60px',
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: '4px'  
  },
  text: {
    color: '#FFFFFF',
    width: '800px',
    paddingTop: '40px',
    textTransform: 'uppercase'
  }
}

class Header extends Component {
  myRef = React.createRef()
  componentDidMount() {
    typeWriter(this.myRef.current, this.props.state.headerText)
  }

  componentDidUpdate() {
    this.renderText()
  }

  renderText = () => {
    if (this.props.state.newGame) {
      typeWriter(this.myRef.current, this.props.state.headerText)
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography className={classes.text} variant={this.props.state.winText ? "h2" : "h5"}>
          <p ref={this.myRef} id='headerText'>{this.props.state.winText}</p>
        </Typography>
      </div>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);

