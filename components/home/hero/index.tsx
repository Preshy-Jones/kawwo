import { GroceryIcon, RestaurantIcon } from "@/components/ui/icons";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import FoodList from "./FoodList";
import AdvertSection from "./AdvertSection";

const Hero = () => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        sx={{
          padding: "1.6em 2.7em",
          ml: "2em",
          borderBottom: "1px solid rgba(100, 100, 100, 0.1)",
        }}
      >
        <Button
          sx={{
            backgroundColor: "black",
            px: "1.8rem",
            py: "1rem",
            borderRadius: "2rem",
            marginRight: "4em",
            // color: "white",
            // width: "100%",
            // height: "100%",
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
          }}
        >
          <RestaurantIcon />
          <Typography
            color={"white"}
            sx={{
              ml: "0.5rem",
            }}
          >
            Restaurants
          </Typography>
        </Button>
        <Stack direction={"row"} alignItems={"center"}>
          <GroceryIcon />
          <Typography ml={"0.7em"}>Grocery</Typography>
        </Stack>
      </Stack>
      <FoodList />
      <AdvertSection />
    </Box>
  );
};

export default Hero;
