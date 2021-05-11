import { useEffect, useState, useContext } from "react";

import { Grid } from "@material-ui/core";

import SingleCard from "./SingleCard/SingleCard";
import { SearchContext } from "../../src/store/SearchContext";
import { SelectContext } from "../../src/store/SelectContext";

interface ICard {
  name: string;
  alpha2Code: string;
  flag: string;
  region: string;
}

const Cards = () => {
  const [fetchedData, setFetchedData] = useState<ICard[]>([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => {
        setFetchedData(data);
      });
  }, []);

  const searchCtx = useContext(SearchContext);
  const selectCtx = useContext(SelectContext);
  return (
    <Grid style={{ marginTop: "20px" }} container spacing={3}>
      {fetchedData.map((singleCountry) => {
        if (singleCountry.name.includes(searchCtx.searchedItem)) {
          if (selectCtx.wasChanged) {
            if (singleCountry.region === selectCtx.region) {
              return (
                <SingleCard
                  key={singleCountry.alpha2Code}
                  flag={singleCountry.flag}
                  name={singleCountry.name}
                />
              );
            }
          } else {
            return (
              <SingleCard
                key={singleCountry.alpha2Code}
                flag={singleCountry.flag}
                name={singleCountry.name}
              />
            );
          }
        }
      })}
    </Grid>
  );
};

export default Cards;
