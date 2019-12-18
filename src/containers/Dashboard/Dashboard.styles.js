export default theme => ({
    topbar: {
      position: 'fixed',
      width: '100%',
      top: 0,
      left: 0,
      right: 'auto',
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    topbarShift: {
      marginLeft: '271px',
      width: 'calc(-271px + 100vw)',
    },
    drawerPaper: {
      zIndex: theme.zIndex.appBar,
      width: '271px',
    },
    sidebar: {
      width: '270px',
    },
    content: {
      marginTop: '64px',
      paddingTop: '20px',
      paddingLeft: '20px',
      paddingRight: '20px',
      backgroundColor: theme.palette.background.default,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      minHeight: 'calc(100vh - 200px)',
    },
    contentShift: {
      marginLeft: '270px',
    },
  });
  