import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import Backdrop from '../backdrop/backdrop';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
    position: 'fixed',
    top: '46%',
    left: '46%',
    width: '60px !important',
    height: '60px !important',
    'z-index': '1550',
    color: theme.palette.primary.dark,
  },
});

const CustomCircularProgress = ({ open, classes }) => (
  <div>
    <Backdrop open={open} onClick={() => {}} zIndex="1550" />
    <CircularProgress className={classes.progress} />
  </div>
);

CustomCircularProgress.propTypes = {
  open: PropTypes.bool.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(CustomCircularProgress);
