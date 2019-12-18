import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, Paper } from '@material-ui/core';


const styles = theme => ({
  root: {
    borderRadius: '4px',
  },
  squared: {
    borderRadius: 0,
  },
  outlined: {
    border: `1px solid ${theme.palette.border}`,
  },
});

const CustomPaper = (props) => {
  const {
    classes, className, outlined, squared, children, ...rest
  } = props;

  const rootClassName = classNames(
    {
      [classes.root]: true,
      [classes.squared]: squared,
      [classes.outlined]: outlined,
    },
    className,
  );

  return (
    <Paper
      {...rest}
      className={rootClassName}
    >
      {children}
    </Paper>
  );
};

CustomPaper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.instanceOf(Object).isRequired,
  elevation: PropTypes.number,
  outlined: PropTypes.bool,
  squared: PropTypes.bool,
};

CustomPaper.defaultProps = {
  squared: false,
  outlined: true,
  elevation: 0,
  children: null,
  className: '',
};

export default withStyles(styles)(CustomPaper);
