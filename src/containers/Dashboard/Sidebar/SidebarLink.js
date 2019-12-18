import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import { Dot } from '../../../utility/ui';
import styles from './SidebarLink.styles';

const SidebarLink = ({
  label, link, icon, children, classes, isSidebarOpen,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleCollapse(event) {
    event.preventDefault();
    setIsOpen(prev => !prev);
  }

  if (!children) {
    return (
      <ListItem
        activeClassName={classes.activeListItem}
        className={classes.listItem}
        component={NavLink}
        to={link}
      >
        <ListItemIcon className={classes.listItemIcon}>
          {icon || <Dot size="small" />}
        </ListItemIcon>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary={label}
        />
      </ListItem>
    );
  }

  return (
    <React.Fragment>
      <ListItem
        activeClassName={classes.activeListItem}
        className={classes.listItem}
        component={NavLink}
        to={link}
        onClick={toggleCollapse}
      >
        <ListItemIcon className={classes.listItemIcon}>
          {icon || <Dot size="small" />}
        </ListItemIcon>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary={label}
        />
      </ListItem>
      {children && (
        <Collapse
          in={isOpen && isSidebarOpen}
          timeout="auto"
          unmountOnExit
          className={classes.nestedList}
        >
          <List component="div" disablePadding>
            {children.map(childrenLink => (
              <SidebarLink
                key={childrenLink && childrenLink.id}
                classes={classes}
                {...childrenLink}
                isSidebarOpen={isSidebarOpen}
              />
            ))}
          </List>
        </Collapse>
      )}
    </React.Fragment>
  );
};

SidebarLink.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.element,
  children: PropTypes.arrayOf(PropTypes.object),
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
};

SidebarLink.defaultProps = {
  label: 'Lable not Given',
  link: '',
  icon: null,
  children: null,
};

export default React.memo(withStyles(styles)(SidebarLink));
