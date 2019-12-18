import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, withWidth, Drawer } from '@material-ui/core';

import Routes from './Routes/index';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';
import styles from './Dashboard.styles';

const Layout = (props) => {
  const { classes, width } = props;
  const [isOpen, setIsOpen] = useState(['xs', 'sm', 'md'].includes(width));

  function handleClose() {
    setIsOpen(false);
  }

  function handleToggleOpen() {
    setIsOpen(prev => !prev);
  }

  const isMobile = ['xs', 'sm', 'md'].includes(width);
  const shiftTopbar = isOpen && !isMobile;
  const shiftContent = isOpen && !isMobile;

  return (
    <React.Fragment>
      <Header
        className={classNames(classes.topbar, {
          [classes.topbarShift]: shiftTopbar,
        })}
        isSidebarOpen={isOpen}
        onToggleSidebar={handleToggleOpen}
      />
      <Drawer
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
        onClose={handleClose}
        open={isOpen}
        variant={isMobile ? 'temporary' : 'persistent'}
      >
        <Sidebar className={classes.sidebar} isSidebarOpen={isOpen} />
      </Drawer>
      <main className={classNames(classes.content, {
        [classes.contentShift]: shiftContent,
      })}
      >
        <Routes />
      </main>
      <Footer />
    </React.Fragment>
  );
};

Layout.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  width: PropTypes.string.isRequired,
};

export default withStyles(styles)(withWidth()(Layout));
