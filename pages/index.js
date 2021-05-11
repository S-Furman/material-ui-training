import { Container, Grid } from "@material-ui/core";

import SelectInput from "../components/SelectInput/SelectInput";
import SearchInput from "../components/SearchInput/SearchInput";
import Cards from "../components/Cards/Cards";

export default function Home() {
  return (
    <Container>
      <Grid spacing={3} container justify="space-between">
        <SearchInput />
        <SelectInput />
      </Grid>
      <Cards />
    </Container>
  );
}
