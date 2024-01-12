import { Box, Grid, IconButton, Stack } from "@mui/material";
import React, { useRef, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const AdvertSection = () => {
  const imageUrls = [
    "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%201581.png_1697208891861?alt=media&token=734df665-48a8-4bba-9b84-82503cb49e6d",
    "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%201583.png_1697543651633?alt=media&token=1e317514-b6ab-4cd8-8dd2-294400d1ded4",
    "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%201143.png_1693923743856?alt=media&token=f099faa3-b979-4e07-93f7-ef880ac9c0cb",
    "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%201572.png_1694610444037?alt=media&token=994f8820-a067-4355-bb41-7763bb51f238",
    "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%201572.png_1694610444037?alt=media&token=994f8820-a067-4355-bb41-7763bb51f238",
  ];

  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLInputElement | null>(null);
  const handleScroll = (direction: any) => {
    const scrollAmount = carouselRef?.current?.clientWidth;
    const newScrollLeft =
      direction === "next"
        ? //@ts-ignore
          scrollLeft + scrollAmount
        : //@ts-ignore
          scrollLeft - scrollAmount;
          //@ts-ignore
    carouselRef.current.scrollLeft = newScrollLeft;
    //@ts-ignore
    setScrollLeft(newScrollLeft);
  };
  return (
    // <Stack direction={"row"} width={"100%"}>
    //   {imageUrls.map((imageUrl, index) => {
    //     return (
    //       <Box
    //         key={index}
    //         sx={{
    //           backgroundImage: `url(${imageUrl})`,
    //           backgroundSize: "cover",
    //           //29vw in width
    //           width: "29vw",
    //           height: "10.6875rem",
    //         }}
    //       ></Box>
    //     );
    //   })}
    // </Stack>
    <Box
      sx={{
        position: "relative",
        mt: "4em",
      }}
    >
      <Stack
        sx={{
          position: "absolute",
          width: "100%",
          height: "10.6875rem",
          padding: "0 1rem",
        }}
        direction={"row"}
        // justifyContent={"space-between"}
        alignItems={"center"}
        className="arrows-container"
      >
        <IconButton
          sx={{
            position: "absolute",
            zIndex: 20,
          }}
          className="left-arrow"
          onClick={() => handleScroll("prev")}
          style={{
            backgroundColor: "#EEEEEE",
            //on hover background of #e0e0e0
          }}
        >
          <ArrowBackIcon
            sx={{
              color: "black",
            }}
          />
        </IconButton>
        <IconButton
          sx={{
            position: "absolute",
            zIndex: 20,
            right: 0,
          }}
          style={{
            backgroundColor: "#EEEEEE",
          }}
          className="right-arrow"
          onClick={() => handleScroll("next")}
        >
          <ArrowForwardIcon
            sx={{
              color: "black",
            }}
          />
        </IconButton>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        sx={
          {
            // position: "absolute",
            // zIndex: 1,
          }
        }
      >
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <div className="carousel no-scrollbar" ref={carouselRef}>
              {imageUrls.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index}`}
                  className="carousel-image"
                />
              ))}
            </div>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default AdvertSection;

const imageUrls = [
  "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%201581.png_1697208891861?alt=media&token=734df665-48a8-4bba-9b84-82503cb49e6d",
  "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%201583.png_1697543651633?alt=media&token=1e317514-b6ab-4cd8-8dd2-294400d1ded4",
  "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%201143.png_1693923743856?alt=media&token=f099faa3-b979-4e07-93f7-ef880ac9c0cb",
  "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%201572.png_1694610444037?alt=media&token=994f8820-a067-4355-bb41-7763bb51f238",
  "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%201572.png_1694610444037?alt=media&token=994f8820-a067-4355-bb41-7763bb51f238",
];
