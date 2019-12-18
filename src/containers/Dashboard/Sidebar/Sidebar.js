import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  withStyles,
  Divider,
  List,
  Typography,
} from '@material-ui/core';

import { useAuth } from '../../../utility/customHooks';
import styles from './Sidebar.styles';
import sidebarRoutes from './SidebarRoutes';
import SidebarLink from './SidebarLink';

const Sidebar = (props) => {
  const { classes, className, isSidebarOpen } = props;
  const rootClassName = classNames(classes.root, className);

  const { user } = useAuth();

  function generateSidebarRoutes() {
    const role = user.role.toLowerCase();
    const filteredRoutes = sidebarRoutes.filter(routes => routes.role.toLowerCase() === role);
    const sideBar = filteredRoutes.map((route, index) => (
      <React.Fragment key={route.id}>
        <Typography variant="h4" className={classes.listTitle}>{route.title}</Typography>
        {route.routes.map(link => (
          <SidebarLink key={link.id} {...link} isSidebarOpen={isSidebarOpen} />
        ))}
        {index !== sidebarRoutes.length - 1 ? <Divider className={classes.listDivider} /> : null}
      </React.Fragment>
    ));

    return sideBar;
  }
  return (
    <nav className={rootClassName}>
      <List
        component="div"
        disablePadding
      >
        <Typography variant="h3" className={classes.listTitle}> USER INFO </Typography>
        <Typography
          className={classes.nameText}
          variant="h5"
        >
          {user.personal_info.first_name.length
            ? user.personal_info.first_name.toUpperCase()
            : 'John Doe'}
        </Typography>
        <Typography
          className={classes.bioText}
          variant="caption"
        >
          {user.personal_info.role}
        </Typography>
        <Divider className={classes.listDivider} />
        {generateSidebarRoutes()}
      </List>
    </nav>
  );
};

const shouldComponentUpdate = (prevProps, nextProps) => {
  if (prevProps.isSidebarOpen !== nextProps.isSidebarOpen) {
    return false;
  }
  return true;
};

Sidebar.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  isSidebarOpen: PropTypes.bool.isRequired,
};

Sidebar.defaultProps = {
  className: '',
};

export default withStyles(styles)(React.memo(Sidebar, shouldComponentUpdate));
