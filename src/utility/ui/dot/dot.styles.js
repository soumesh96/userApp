export default theme => ({
  dotBase: {
    width: 5,
    height: 5,
    backgroundColor: theme.palette.text.secondary,
    borderRadius: '50%',
    transition: theme.transitions.create('background-color'),
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  dotLarge: {
    width: 8,
    height: 8,
  },
});
