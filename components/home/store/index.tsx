import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import Sorter from "./Sorter";
import Restaurants from "./Restaurants";

const Store = () => {
  return (
    <Stack mt={"4em"} direction={"row"} justifyContent={"center"}>
      <Grid container width={"90%"}>
        <Grid xs={3} item>
          <Sorter />
        </Grid>
        <Grid xs={9} item>
          <Restaurants />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Store;
