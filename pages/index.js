import {
  Box,
  Button,
  Container,
  Grid,
  Input,
  InputAdornment,
  makeStyles,
  MenuItem,
  Paper,
  Select,
  InputLabel,
  FormControl,
  NativeSelect,
} from "@material-ui/core";
import CountryCard from "../components/countryCard/CountryCard";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  input: {
    backgroundColor: "#FFFFFF",
    padding: "10px",
  },

  formControl: {
    minWidth: 200,
  },
  select: {
    padding: 10,
    backgroundColor: "#FFFFFF",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Container>
      <Grid spacing={3} container justify="space-between">
        <Grid item xs={12} sm={5}>
          <Input
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
        <Grid style={{ textAlign: "right" }} item>
          <FormControl
            className={classes.formControl}
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <Select native id="selectRegion" className={classes.select}>
              <option>Africa</option>
              <option>America</option>
              <option>Asia</option>
              <option>Europe</option>
              <option>Oceania</option>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid style={{ marginTop: "20px" }} container spacing={3}>
        <CountryCard></CountryCard>
        <CountryCard></CountryCard>
      </Grid>
    </Container>
  );
}
