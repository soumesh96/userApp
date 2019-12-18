export default theme => ({
  root: {
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    paddingLeft: theme.spacing.unit,
  },
  logoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '63px',
    flexShrink: 0,
  },
  logoLink: {
    fontSize: 0,
  },
  logoImage: {
    cursor: 'pointer',
  },
  logoDivider: {
    marginBottom: theme.spacing.unit * 2,
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content',
  },
  avatar: {
    width: '100px',
    height: '100px',
  },
  nameText: {
    marginTop: theme.spacing.unit * 2,
  },
  bioText: {},
  profileDivider: {
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
  },
  listSubheader: {
    color: theme.palette.text.secondary,
  },
  listTitle: {
    color: theme.palette.text.secondary,
    width: '80%',
    marginTop: '10px',
    // marginLeft: '-8px',
    marginBottom: '10px',
    textAlign: 'center',
    fontWeight: 'lighter',
  },
  listDivider: {
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
  },
});
