import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import Brightness3Icon from "@material-ui/icons/Brightness3";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ffffff",
    marginBottom: "50px",
  },
  title: {
    flexGrow: 1,
    color: "#000000",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Where in the world?
        </Typography>
        <Button startIcon={<Brightness3Icon />}>Dark Mode</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
