import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { withStyles } from "@mui/material/styles";
import { Box } from "@mui/material";
import Link from "@mui/material/Link";
import { SymbolBtn } from "./icons/Symbol";

const StyledHeader = styled("div")(({ theme }) => ({
  "& .none": {
    display: "none",
  },
}));

const HamburgerButton = styled("div")(({ theme }) => ({
  transition: "all 200ms ease-out 0s",
  pointerEvents: "all",
  maxHeight: "100%",
  display: "flex",
  alignItems: "center",

  "& svg": {
    fill: "rgb(0,0,0)",
    "& .vert1": {
      transform: "rotate(0deg)",
    },
    "& .vert2": {
      transform: "rotate(0deg)",
    },
  },
  "&.minus svg": {
    fill: "rgb(255,255,255)",
    "& .vert1": {
      transform: "rotate(90deg)",
    },
    "& .vert2": {
      transform: "rotate(180deg)",
    },
  },

  "&:hover": {
    opacity: 0.7,
    transform: "scale(0.975)",
    backgroundColor: "transparent",
  },
}));

const StyledLogoImg = styled("div")(({ theme }) => ({
  cursor: "pointer",
  display: "flex",
  "& img": {
    height: "clamp(28px, 2vw, 50px)",
    maxHeight: "50px",
  },
}));

const HamburgerPageNavButton = styled(Button)(({ theme }) => ({
  width: "398px",
  color: "white",
  backgroundColor: "transparent",
  fontSize: "clamp(30px,4vw,57.6px)",
  display: "block",
  border: "1px solid red",
  height: "111px",
  [theme.breakpoints.down(450)]: {
    width: "100%",
  },
}));

const HamburgerNavBox = styled(Box)(({ theme }) => ({
  width: "398px",
  marginTop: "160px",
  [theme.breakpoints.down(450)]: {
    width: "100%",
  },
}));

const StyledHeaderContainer = styled("div")(({ theme }) => ({
  zIndex: 100,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  padding: "clamp(max(15px,1.25vh),2.5vw,min(48px,5vh))",
  maxHeight: "40px",
}));

const HamburgerSection = () => {
  const navigate = useNavigate();

  return (
    <div
      id="myHamburger"
      className="none"
      style={{
        backgroundColor: "black",
        height: "calc(100vh + 10px)",
        marginTop: "-10px",
        width: "100%",
        position: "fixed",
        zIndex: 90,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "86%",
          display: "flex",
          margin: "auto",
          justifyContent: "flex-end",
        }}
      >
        <HamburgerNavBox>
          <HamburgerPageNavButton>Home</HamburgerPageNavButton>
          <HamburgerPageNavButton>Our Work</HamburgerPageNavButton>
          <HamburgerPageNavButton>About</HamburgerPageNavButton>
          <HamburgerPageNavButton>Contact</HamburgerPageNavButton>
        </HamburgerNavBox>
      </Box>
    </div>
  );
};

const HamburgerSectionHidden = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "none",
        position: "fixed",
      }}
    ></div>
  );
};

const PageHeader = () => {
  const homepageElement = document.getElementById("homepageElement");

  // if (!iconStatus) {
  //   if (homepageElement) {
  //     homepageElement.addEventListener("scroll", function (e) {
  //       e.preventDefault();
  //     });
  //   }
  // }

  const handleHamburger = () => {
    var svg = document.querySelector("#transition-svg");
    var menu = document.querySelector("#myHamburger");
    var logo1 = document.querySelector("#logo1");
    var logo2 = document.querySelector("#logo2");

    if (svg?.classList.contains("minus")) {
      svg?.classList.remove("minus");
      menu?.classList.add("none");
      logo1?.classList.remove("none");
      logo2?.classList.add("none");
    } else {
      svg?.classList.add("minus");
      menu?.classList.remove("none");
      logo1?.classList.add("none");
      logo2?.classList.remove("none");
    }
  };

  const handleLogo = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <Box sx={{ zIndex: 100 }}>
          <StyledLogoImg onClick={() => handleLogo()}>
            <img src="/logo.svg" id="logo1" />
            <img src="/logo2.png" id="logo2" className="none" />
          </StyledLogoImg>
        </Box>
        <HamburgerButton onClick={handleHamburger} id="transition-svg">
          <SymbolBtn />
        </HamburgerButton>
      </StyledHeaderContainer>
      <div>
        <HamburgerSection />
      </div>
    </StyledHeader>
  );
};

export default PageHeader;
