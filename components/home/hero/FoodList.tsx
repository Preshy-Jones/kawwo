import { getTags } from "@/features/restaurant/restaurantSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Box, Grid, Skeleton, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";

const FoodList = () => {
  const { tags, tagsLoading } = useAppSelector((state) => state.restaurant);
  const dispatch = useAppDispatch();
  let skeletonMultiplier = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  useEffect(() => {
    dispatch(getTags());
  }, []);

  return (
    <Stack
      sx={{
        width: "100%",
      }}
      direction={"row"}
      justifyContent={"flex-end"}
    >
      <Stack
        direction={"row"}
        sx={{
          overflowX: "scroll",
          width: "95%",
          mr: "0.9em",
        }}
        className="no-scrollbar"
      >
        {tagsLoading ? (
          <Grid container spacing={3}>
            {skeletonMultiplier.map((item) => {
              return (
                <Grid key={`item-${item}`} item xs={1}>
                  <Skeleton
                    variant="rectangular"
                    width={80}
                    height={80}
                    sx={{
                      mr: "1em",
                    }}
                  />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          tags.map((tag) => {
            return (
              <Box
                key={tag._id}
                sx={{
                  mr: "2em",
                  px: "1em",
                  py: "0.8em",
                  cursor: "pointer",
                  //hover background
                  "&:hover": {
                    background: "#F5F5F5",
                    borderRadius: "2em",
                    transition: "0.5s",
                    // transform: "scale(1.1)",
                  },
                  boxShadow: "0px 0px 5px #F5F5F5",
                  borderRadius: "2em",

                  // background: "red",
                }}
              >
                <img
                  src={tag.iconUrl}
                  width={43}
                  height={42}
                  alt={tag.title}
                  style={{
                    margin: 0,
                  }}
                />
                {/* <Image src={tag.iconUrl} width={50} height={50} alt={tag.name} /> */}
                <Typography
                  sx={{
                    margin: 0,
                  }}
                >
                  {tag.title}
                </Typography>
              </Box>
            );
          })
        )}
      </Stack>
    </Stack>
  );
};

export default FoodList;
