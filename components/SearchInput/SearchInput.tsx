import { useContext } from "react";
import { Grid, Input, InputAdornment, makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { SearchContext } from "../../src/store/SearchContext";

const useStyles = makeStyles((theme) => ({
  input: {
    padding: "10px",
    backgroundColor: theme.palette.background.default,
  },
}));

const SearchInput = () => {
  const classes = useStyles();

  const searchCtx = useContext(SearchContext);

  return (
    <Grid item xs={12} sm={5}>
      <Input
        onChange={(event) => searchCtx.searchCountry(event.target.value)}
        fullWidth
        className={classes.input}
        disableUnderline
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        placeholder="Search for a country..."
      />
    </Grid>
  );
};

export default SearchInput;
