import {
  Box,
  Grid,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getRestaurants } from "@/features/restaurant/restaurantSlice";
import { Restaurant } from "@/types/global";

const Restaurants = () => {
  const { restaurants, restaurantIsLoading } = useAppSelector(
    (state) => state.restaurant
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

  return (
    <Box>
      <Stack direction={"row"} justifyContent={"space-between"} mb={4}>
        <Typography letterSpacing={-1} fontSize={"212%"} lineHeight={1.235}>
          Special offers for you
        </Typography>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography mr={"3em"}>See all</Typography>
          <Stack direction={"row"}>
            <IconButton
              style={{
                backgroundColor: "#EEEEEE",
                //on hover background of #e0e0e0
              }}
              sx={{
                mr: "0.5em",
              }}
            >
              <ArrowBackIcon
                sx={{
                  color: "black",
                }}
              />
            </IconButton>
            <IconButton
              style={{
                backgroundColor: "#EEEEEE",
              }}
            >
              <ArrowForwardIcon
                sx={{
                  color: "black",
                }}
              />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
      {restaurantIsLoading ? (
        <Grid container rowSpacing={8} columnSpacing={5}>
          <Grid item xs={4}>
            <Skeleton
              variant="rectangular"
              width={200}
              height={80}
              sx={{
                mr: "1em",
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Skeleton
              variant="rectangular"
              width={200}
              height={80}
              sx={{
                mr: "1em",
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Skeleton
              variant="rectangular"
              width={200}
              height={80}
              sx={{
                mr: "1em",
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Skeleton
              variant="rectangular"
              width={200}
              height={80}
              sx={{
                mr: "1em",
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Skeleton
              variant="rectangular"
              width={200}
              height={80}
              sx={{
                mr: "1em",
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Skeleton
              variant="rectangular"
              width={200}
              height={80}
              sx={{
                mr: "1em",
              }}
            />
          </Grid>
        </Grid>
      ) : (
        <Grid container rowSpacing={8} columnSpacing={5}>
          {restaurants.map((restaurant: Restaurant) => {
            <Grid item xs={4}>
              <RestaurantItem item={restaurant} />
            </Grid>;
          })}
        </Grid>
      )}
    </Box>
  );
};

export default Restaurants;

const RestaurantItem = ({ item }: { item: Restaurant }) => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fimage_downloader_1625334309676_500x218.jpg?alt=media&token=e10b8a34-757a-4337-b2a4-7fba64ae9906")`,
          height: "7.375rem",
          width: "19.5rem",
        }}
      ></Box>
      <Box>
        <Typography
          sx={{
            fontSize: "150%",
            lineHeight: "1.43",
          }}
        >
          {item.title}
        </Typography>
        <Typography
          sx={{
            mt: "0.3em",
            letterSpacing: "0.5px",
          }}
          style={{
            color: "#757575",
          }}
        >
          Sandwich, Smoothie
        </Typography>
        <Stack direction={"row"}>
          <img
            src="https://heyfood.africa/icons/new/rating-star.svg"
            alt="heyfood-star"
          />
          <Typography
            sx={{
              fontSize: "110%",
              ml: "0.2em",
            }}
          >
            4.5
          </Typography>
          <Typography
            sx={{
              ml: "1em",
              fontSize: "110%",
            }}
          >
            {item.ratings.length}+ Ratings
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};
