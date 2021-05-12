import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import { useContext } from "react";
import { ThemeContext } from "../../../src/store/ThemeContext";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    marginBottom: "50px",
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const themeCtx = useContext(ThemeContext);

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Where in the world?
        </Typography>
        <Button onClick={themeCtx.changeTheme} startIcon={<Brightness3Icon />}>
          Dark Mode
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
