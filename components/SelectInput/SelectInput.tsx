import { FormControl, Select, Grid, makeStyles } from "@material-ui/core";
import { useContext } from "react";
import { SelectContext } from "../../src/store/SelectContext";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 200,
  },
  select: {
    padding: 10,
    backgroundColor: "#FFFFFF",
  },
}));

const SelectInput = () => {
  const classes = useStyles();
  const selectCtx = useContext(SelectContext);
  return (
    <Grid style={{ textAlign: "right" }} item>
      <FormControl
        className={classes.formControl}
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <Select
          onChange={(event) => selectCtx.selectRegion(event.target.value)}
          native
          id="selectRegion"
          className={classes.select}
        >
          <option value="">Select Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </Select>
      </FormControl>
    </Grid>
  );
};

export default SelectInput;
