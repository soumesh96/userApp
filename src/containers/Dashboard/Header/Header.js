
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  withStyles,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';

import {
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@material-ui/icons';
import styles from './Header.styles';

const Header = ({
  classes, className, isSidebarOpen, onToggleSidebar,
}) => {
  const rootClassName = classNames(classes.root, className);

  return (

    <React.Fragment>
      <div className={rootClassName}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            className={classes.menuButton}
            onClick={onToggleSidebar}
            variant="text"
          >
            {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Typography
            className={classes.title}
            variant="h4"
          >
            {'Personal Info'}
          </Typography>
        </Toolbar>
      </div>

    </React.Fragment>

  );
};

Header.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  isSidebarOpen: PropTypes.bool.isRequired,
  onToggleSidebar: PropTypes.func.isRequired,
};

Header.defaultProps = {
  className: '',
};

export default withStyles(styles)(Header);
