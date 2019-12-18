import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, Divider, Typography } from '@material-ui/core';


// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4,
    marginTop: '0px',
  },
  company: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 0.5,
  },
});

const Footer = (props) => {
  const { classes, className } = props;

  const rootClassName = classNames(classes.root, className);

  return (
    <div className={rootClassName}>
      <Divider />
      <Typography
        className={classes.company}
        variant="body1"
      >
        &copy; SRB
      </Typography>
      <Typography variant="caption">
        Created For the personal Use of Soumesh
      </Typography>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

Footer.defaultProps = {
  className: '',
};

export default withStyles(styles)(Footer);
