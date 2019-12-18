import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core';

import styles from './dot.styles';

const Dot = ({ classes, size, theme }) => (
  <div
    className={classnames(classes.dotBase, {
      [classes.dotLarge]: size === 'large',
      [classes.dotSmall]: size === 'small',
    })}
    style={{ backgroundColor: theme.palette.primary.main }}
  />
);

Dot.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  size: PropTypes.string,
  theme: PropTypes.objectOf(PropTypes.instanceOf(Object)).isRequired,
};

Dot.defaultProps = {
  size: 'small',
};

export default withStyles(styles, { withTheme: true })(Dot);
