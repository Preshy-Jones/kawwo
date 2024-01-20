import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  RadioProps,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { styled } from "@mui/material/styles";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px black"
      : "inset 0 0 0 1px rgb(238, 238, 238), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor:
    theme.palette.mode === "dark" ? "rgb(238, 238, 238)" : "rgb(238, 238, 238)",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto black",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background: theme.palette.mode === "dark" ? "black" : "black",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "black",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "black",
  },
});

function BpRadio(props: RadioProps) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

const Sorter = () => {
  return (
    <Box>
      <Typography letterSpacing={-0.5} fontSize={"174%"}>
        All Stores
      </Typography>
      <Typography
        fontSize={"120%"}
        lineHeight={1.5}
        style={{
          color: "#545454",
        }}
      >
        (4 Stores)
      </Typography>
      <Box>
        <Stack direction={"row"}>
          <img
            src="https://heyfood.africa/icons/new/sort-desc.svg"
            alt="sort"
          />
          <Typography>Sort</Typography>
        </Stack>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value=""
              control={<BpRadio />}
              label="Most popular"
            />
            <FormControlLabel value="" control={<BpRadio />} label="Nearest" />
            <FormControlLabel
              value=""
              control={<BpRadio />}
              label="Highest rated"
            />
            <FormControlLabel value="" control={<BpRadio />} label="Newest" />
            <FormControlLabel
              value=""
              control={<BpRadio />}
              label="Most rated"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Sorter;
