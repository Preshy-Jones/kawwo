import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getTags } from "@/features/restaurant/restaurantSlice";

const Categories = ({ showCategories }: { showCategories: boolean }) => {
  const { tags, tagsLoading } = useAppSelector((state) => state.restaurant);
  const dispatch = useAppDispatch();
  let skeletonMultiplier = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  useEffect(() => {
    dispatch(getTags());
  }, []);

  return (
    <Box>
      {showCategories && (
        <motion.div
          style={{
            background: "white",
            position: "absolute",
            top: "4rem",
            width: "100vw",
            zIndex: 90,
            paddingTop: "2em",
            // paddingLeft: "0 4.4em",
          }}
        >
          <Typography
            sx={{
              fontSize: "180%",
              paddingLeft: "2.4em",
            }}
          >
            Categories
          </Typography>
          <Box>
            {tags.map((tag, index) => {
              return (
                <Stack
                  key={index}
                  direction={"row"}
                  alignItems={"center"}
                  sx={{
                    padding: "2em 4.4em",
                    cursor: "pointer",
                    //on hover background
                    "&:hover": {
                      backgroundColor: "rgba(100, 100, 100, 0.1)",
                      borderRadius: "2rem",
                      transition: "0.2s ease-in-out",
                    },
                  }}
                  style={{
                    borderBottom: "1px solid rgba(100, 100, 100, 0.1)",
                  }}
                >
                  <Image
                    src="https://heyfood.africa/icons/new/cutlery.svg"
                    width={24}
                    height={24}
                    alt="cutlery-icon"
                  />
                  <Typography
                    sx={{
                      fontSize: "123%",
                      ml: "1.2em",
                    }}
                  >
                    {tag.title}
                  </Typography>
                </Stack>
              );
            })}
          </Box>
        </motion.div>
      )}
    </Box>
  );
};

export default Categories;
