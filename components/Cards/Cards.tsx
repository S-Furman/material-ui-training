import { useEffect, useState, useContext } from "react";

import { Grid } from "@material-ui/core";

import SingleCard from "./SingleCard/SingleCard";
import { SearchContext } from "../../src/store/SearchContext";

interface ICard {
  name: string;
  alpha2Code: string;
  flag: string;
}

const Cards = () => {
  const [fetchedData, setFetchedData] = useState<ICard[]>([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => {
        setFetchedData(data);
        console.log(data);
      });
  }, []);

  const searchCtx = useContext(SearchContext);
  return (
    <Grid style={{ marginTop: "20px" }} container spacing={3}>
      {fetchedData.map((singleCountry) => {
        if (singleCountry.name.includes(searchCtx.searchedItem)) {
          return (
            <SingleCard
              key={singleCountry.alpha2Code}
              flag={singleCountry.flag}
              name={singleCountry.name}
            />
          );
        }
      })}
    </Grid>
  );
};

export default Cards;
