import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const PageFooterBox = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundColor: "black",
  height: "clamp(500px, 40vw, 600px)",
  minHeight: "fit-content",

  [theme.breakpoints.down(950)]: {
    display: "block",
    height: "fit-content",
  },
}));

const PageFooterButtonBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#ACACAC",
  width: "28%",
  "&:hover": {
    "& img": {
      transition: "all .5s",
      marginBottom: "5%",
      color: "lightgrey",
    },
  },

  [theme.breakpoints.down(950)]: {
    width: "100%",
  },
}));

const PageFooterButton = styled(Button)(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundImage: `url('/bottomtotopBackground.png')`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
}));

const PageFooterButtonLinkBox = styled(Box)(({ theme }) => ({
  width: "72%",

  [theme.breakpoints.down(950)]: {
    width: "100%",
  },
}));

const PageFooterButtonLinkBoxA = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "250px",
  justifyContent: "flex-start",
  paddingTop: "120px",
  width: "90%",
  margin: "auto",

  [theme.breakpoints.down(950)]: {
    display: "block",
    height: "unset",
    paddingTop: "50px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
}));

const PageFooterButtonLinkBoxB = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "83.5%",
  marginLeft: "5%",

  [theme.breakpoints.down(950)]: {
    marginLeft: "unset",
    paddingBottom: "20px",
    paddingRight: "20px",
    paddingTop: "20px",
    paddingLeft: "20px",
    flexDirection: "column",
    margin: "auto",
    width: "90%",
  },
}));

const PageFooterBusinessLink = styled(Link)(({ theme }) => ({
  color: "white",
  display: "block",
  fontSize: "clamp(18px,1.25vw,23px)",

  [theme.breakpoints.down(950)]: {
    marginBottom: "5px",
  },
}));

const PageFooterContactLink = styled(Link)(({ theme }) => ({
  color: "white",
  display: "block",
  fontSize: "clamp(18px,1.25vw,23px)",

  [theme.breakpoints.down(1100)]: {
    maxWidth: "250px",
  },
}));

const PageFooterPolicyTextHidden = styled(Link)(({ theme }) => ({
  opacity: "0.5",
  color: "white",
  fontSize: "clamp(12px,0.83vw,2.22vh)",
  fontFamily: "Nunito Sans",
  marginTop: "50px",
  display: "block",

  [theme.breakpoints.down(950)]: {
    display: "none!important",
  },
}));

const PageFooterPolicyTextShow = styled(Link)(({ theme }) => ({
  opacity: "0.5",
  color: "white",
  fontSize: "clamp(12px,0.83vw,2.22vh)",
  fontFamily: "Nunito Sans",
  display: "block",

  [theme.breakpoints.up(950)]: {
    display: "none",
  },
}));

const BoxQ = styled(Box)(({ theme }) => ({
  width: "45%",

  [theme.breakpoints.down(950)]: {
    width: "100%",
    marginBottom: "30px",
  },
}));

const BoxW = styled(Box)(({ theme }) => ({
  width: "14%",
  marginRight: "12%",

  [theme.breakpoints.down(950)]: {
    width: "100%",
    marginBottom: "30px",
  },
}));

const BoxE = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down(950)]: {
    width: "100%",
    marginBottom: "30px",
  },
}));

const StyledArrowIcon = styled("img")(({ theme }) => ({
  transform: "rotate(180deg)",
  width: "clamp(20px,3vw,60px)",
  [theme.breakpoints.down(950)]: {
    width: "40px",
    margin: "30px 0px",
  },
}));

const StyledFooterTextWrapper = styled("div")(({ theme }) => ({
  minHeight: "200px",
  [theme.breakpoints.down(950)]: {
    minHeight: "fit-content",
  },
}));

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const PageFooter = () => {
  return (
    <PageFooterBox>
      <PageFooterButtonLinkBox>
        <PageFooterButtonLinkBoxA>
          <BoxQ>
            <Typography
              style={{
                color: "white",
                fontSize: "clamp(18px,1.25vw,3.33vh)",
                fontWeight: "700",
                marginBottom: "20px",
                fontFamily: "Nunito Sans",
              }}
            >
              Contact
            </Typography>
            <StyledFooterTextWrapper>
              <PageFooterContactLink href="#" underline="none">
                New business: holla@controltheory.io
              </PageFooterContactLink>
              <PageFooterContactLink href="#" underline="none">
                PR and talks: press@controltheory.io
              </PageFooterContactLink>
              <PageFooterContactLink href="#" underline="none">
                Work inquiries: work@controltheory.io
              </PageFooterContactLink>
            </StyledFooterTextWrapper>
            <PageFooterPolicyTextHidden href="#" underline="none">
              © 2023 Control Theory. All Rights Reserved.
            </PageFooterPolicyTextHidden>
          </BoxQ>
          <BoxW sx={{ marginBottom: "20px" }}>
            <Typography
              style={{
                color: "white",
                fontSize: "clamp(18px,1.25vw,3.33vh)",
                fontWeight: "700",
                marginBottom: "20px",
                fontFamily: "Nunito Sans",
              }}
            >
              Address
            </Typography>
            <PageFooterBusinessLink href="#" underline="none">
              Telliskivi 57, 10412, Tallinn Estonia
            </PageFooterBusinessLink>
          </BoxW>
          <BoxE sx={{ marginBottom: "10px" }}>
            <Typography
              style={{
                color: "white",
                fontSize: "clamp(18px,1.25vw,3.33vh)",
                fontWeight: "700",
                marginBottom: "20px",
              }}
            >
              Social
            </Typography>
            <StyledFooterTextWrapper>
              <PageFooterContactLink href="#" underline="none">
                Twitter
              </PageFooterContactLink>
              <PageFooterContactLink href="#" underline="none">
                Instagram
              </PageFooterContactLink>
              <PageFooterContactLink href="#" underline="none">
                LinkedIn
              </PageFooterContactLink>
            </StyledFooterTextWrapper>
            <Box sx={{ display: "flex" }}>
              <PageFooterPolicyTextHidden
                href="#"
                underline="none"
                style={{
                  marginRight: "20px",
                }}
              >
                Terms of Service
              </PageFooterPolicyTextHidden>
              <PageFooterPolicyTextHidden href="#" underline="none">
                Privacy Policy
              </PageFooterPolicyTextHidden>
            </Box>
          </BoxE>
        </PageFooterButtonLinkBoxA>
        <PageFooterButtonLinkBoxB>
          <PageFooterPolicyTextShow href="#" underline="none">
            © 2023 Control Theory. All Rights Reserved.
          </PageFooterPolicyTextShow>
          <Box sx={{ display: "flex", gap: "30px" }}>
            <PageFooterPolicyTextShow href="#" underline="none">
              Terms of Service
            </PageFooterPolicyTextShow>
            <PageFooterPolicyTextShow href="#" underline="none">
              Privacy Policy
            </PageFooterPolicyTextShow>
          </Box>
        </PageFooterButtonLinkBoxB>
      </PageFooterButtonLinkBox>
      <PageFooterButtonBox>
        <PageFooterButton onClick={scrollToTop}>
          <StyledArrowIcon src="/icons/arrow_down.svg" alt="arrow" />
        </PageFooterButton>
      </PageFooterButtonBox>
    </PageFooterBox>
  );
};

export default PageFooter;
