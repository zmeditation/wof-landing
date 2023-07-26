import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style.css";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CompanyBox from "../components/CompanyBox";
import WorkBox from "../components/WorkBox";
import ContactForm from "../components/ContactForm";
import PageFooter from "../components/PageFooter";
import Link from "@mui/material/Link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { FuzzyText } from "../components/FuzzyText";
import { NewsBox } from "../components/NewsBox";

const StyledBannerContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  width: "100%",
  backgroundImage: `url('homeHeaderbackground.png')`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  display: "grid",
  placeItems: "center",
  gridTemplateRows: "1fr max-content",

  [theme.breakpoints.down(950)]: {
    minHeight: "90vh",
  },
}));

const CompanyTypo = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: "300",
  fontSize: "clamp(28px,3.33vw,60px)",
  lineHeight: "112.02%",

  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
}));

const PageHeaderContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  minHeight: "280px",

  [theme.breakpoints.down(950)]: {
    padding:
      "calc(clamp(max(60px,5vh),10vw,min(192px,20vh)) * 2) 0 clamp(max(37.5px,3.125vh),6.25vw,min(120px,12.5vh))",
  },
}));

const ResponsiveNavButtonBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  width: "50%",
  margin: "auto",

  [theme.breakpoints.down(950)]: {
    display: "block",
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: "black",
  fontWeight: "500",
  fontSize: "clamp(22px,1.67vw,4.44vh)",
  textTransform: "unset",
  display: "flex",
  alignItems: "center",
  transition: "all .5s",
  padding: "unset",
  fontFamily: "Nunito Sans",

  "&:hover": {
    backgroundColor: "transparent",
    color: "#1b1b1b4d",
    "& .MuiSvgIcon-root": {
      transition: "all .5s",
      marginLeft: 4,
      color: "#1b1b1b4d",
    },
  },

  [theme.breakpoints.down(950)]: {
    fontSize: "clamp(18px,1.25vw,3.33vh)",
    margin: "auto",
  },
}));

const ResponsiveNavPageButtonBox = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "grid",
  gridTemplateColumns: "2.5fr 1fr",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  margin: "auto",

  [theme.breakpoints.down(950)]: {
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr 1fr",
  },
}));

const NavPageButton = styled(Button)(({ theme }) => ({
  color: "black",
  fontWeight: "500",
  fontSize: "clamp(20px,2.5vw,45px)",
  textTransform: "unset",
  transition: "all .1s",
  fontFamily: "Nunito Sans",
  lineHeight: 1.25,
  padding:
    "clamp(max(15px,1.25vh),2.5vw,min(48px,5vh)) clamp(max(30px,2.5vh), 5vw,min(96px,10vh))",

  "&:hover": {
    backgroundColor: "transparent",
    color: "#1b1b1b4d",
    "& div img": {
      transform: "translateY(2px)",
      opacity: 0.3,
    },
  },

  [theme.breakpoints.down(950)]: {
    marginRight: "auto",
    padding: "clamp(max(30px,2.5vh),5vw,min(96px,10vh))",
    fontSize: "clamp(28px,3.33vw,8.89vh)",
    width: "100%",
  },
}));

const ResponsiveFeatureBox = styled(Box)(({ theme }) => ({
  background: "black",
  margin: "auto",
  display: "grid",
  gridTemplateColumns: "max-content 1fr",
  padding: "clamp(max(30px,2.5vh),5vw,min(96px,10vh))",
  gap: "clamp(max(45px,3.75vh),7.5vw,min(144px,15vh))",
  [theme.breakpoints.down(950)]: {
    padding:
      "clamp(max(60px,5vh),10vw,min(192px,20vh)) clamp(max(30px,2.5vh),5vw,min(96px,10vh))",
    gridTemplateColumns: "auto",
    minHeight: "fit-content",
  },
}));

const ResponsiveFeatureTypoBox = styled(Box)(({ theme }) => ({
  alignSelf: "center",
  display: "grid",
  gap: "clamp(8px,0.83vw,2.22vh)",
  maxWidth: "clamp(300px,19.79vw,52.78vh)",
  [theme.breakpoints.down(950)]: {
    gridRow: "2 / 3",
  },
}));

const StyledEmailTitle = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(18px,1.25vw,3.33vh)",
  fontWeight: "400",
  color: "black",
  fontFamily: "Nunito Sans",
  lineHeight: "1",
  [theme.breakpoints.down(950)]: {
    fontSize: "clamp(14px,1.04vw,2.78vh)",
  },
}));

const ResponsiveFeatureImgBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "grid",
  "& img": {
    width: "100%",
    margin: "auto",
  },
  [theme.breakpoints.down(500)]: {
    "& img": {
      height: "247px",
    },
  },
}));

const CompanyButtonBox = styled(Box)(({ theme }) => ({
  paddingLeft: "30px",
  paddingRight: "30px",
  height: "clamp(100px, 50vw, 990px)",
  [theme.breakpoints.down(950)]: {
    height: "fit-content",
    marginBottom: "50px",
  },
}));

const StyledBottomMenu = styled(Box)(({ theme }) => ({
  height: "clamp(100px, 40vw, 600px)",
  backgroundColor: "#D3D3D3",
  backgroundImage: `url('homeHeaderbackground.png')`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  display: "flex",

  [theme.breakpoints.down(950)]: {
    height: "fit-content",
    padding: "100px 0px",
  },
}));

const StyledFeaturedWork = styled(Box)(({ theme }) => ({
  height: "clamp(100px, 70vw, 1270px)",
  minHeight: "fit-content",
  paddingLeft: "30px",
  paddingRight: "30px",
  [theme.breakpoints.down(1600)]: {
    height: "fit-content",
    paddingBottom: "30px",
  },
}));

const PartnerBox = styled(Box)(({ theme }) => ({
  maxWidth: "clamp(720px,75vw,90vw)",
  margin: "clamp(max(15px,1.25vh),2.5vw,min(48px,5vh)) auto",
  padding:
    "clamp(max(15px,1.25vh),2.5vw,min(48px,5vh)) clamp(max(30px,2.5vh),5vw,min(96px,10vh))",
}));

const WorkButtonBox = styled(Box)(({ theme }) => ({
  maxWidth: "1730px",
  display: "flex",
  justifyContent: "space-between",
  margin: "auto",
  alignItems: "center",
  padding: "clamp(max(15px,1.25vh),2.5vw,min(48px,5vh)) 0px",

  [theme.breakpoints.down(950)]: {
    display: "block",
    marginBottom: "0px",
  },
}));

const WorkButton = styled(Button)(({ theme }) => ({
  color: "black",
  display: "flex",
  alignItems: "center",
  fontWeight: "700",
  fontSize: "clamp(20px,2.5vw,6.67vh)",
  textTransform: "unset",
  transition: "all .5s",
  fontFamily: "Nunito Sans",
  "& .MuiSvgIcon-root": {
    marginTop: "4px",
  },

  "&:hover": {
    backgroundColor: "transparent",
    color: "#1b1b1b4d",
    "& .MuiSvgIcon-root": {
      transition: "all .5s",
      transform: "translateX(6px)",
      color: "#1b1b1b4d",
    },
  },

  [theme.breakpoints.down(950)]: {
    paddingLeft: 0,
    marginTop: "20px",
  },
}));

const AllWorkButton = styled(Button)(({ theme }) => ({
  color: "white",
  background: "black",
  padding: "0.5em 1.8em 0.5em",
  borderRadius: "10em",
  fontSize: "clamp(14px,0.94vw,2.5vh)",
  transition: "background 200ms ease-out 0s",
  textAlign: "center",
  textTransform: "none",
  fontFamily: "Nunito Sans",
  "& .MuiSvgIcon-root": {
    fontWeight: "700",
    fontSize: "clamp(14px,20px,2.5vh)",
    marginLeft: "2px",
  },

  "&:hover": {
    backgroundColor: "#1b1b1b4d",
    "& .MuiSvgIcon-root": {
      transform: "translateX(6px)",
      transition: "all .5s",
    },
  },
}));

const ResponsiveBoxGmailInfo = styled(Box)(({ theme }) => ({
  justifyContent: "space-between",
  display: "flex",
  maxWidth: "94%",
  alignItems: "center",
  margin: "auto",

  [theme.breakpoints.down(950)]: {
    textAlign: "left",
    padding: "unset",
    flexDirection: "column",
    alignItems: "flex-start",
    margin: "unset",
    minHeight: "0px",
  },
}));

const ResponsiveBoxGmailInfoRight = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down(950)]: {
    display: "block",
    marginTop: "30px",
  },
}));

const ResponsiveGmailInfoButton = styled(Button)(({ theme }) => ({
  fontSize: "clamp(20px,2.5vw,6.67vh)",
  fontWeight: "400",
  color: "Black",
  paddingLeft: "unset",
  paddingRight: "unset",
  textTransform: "unset",
  backgroundColor: "transparent !important",
  fontFamily: "Nunito Sans",
  lineHeight: "1",

  "&:hover": {
    color: "#1b1b1b4d",
  },

  [theme.breakpoints.down(950)]: {
    display: "block",
    textAlign: "left",
  },
}));

const ResponsiveBoxBottomMenu = styled(Box)(({ theme }) => ({
  maxWidth: "1320px",
  display: "flex",
  justifyContent: "space-around",
  margin: "auto",
  alignItems: "center",

  [theme.breakpoints.down(950)]: {
    flexDirection: "column",
  },
}));

const ResponsiveBottomMenuButton = styled(Button)(({ theme }) => ({
  fontSize: "clamp(28px,3.75vw,10vh)",
  fontWeight: "400",
  color: "black",
  textTransform: "unset",
  fontFamily: "Nunito Sans",
  padding: "0px 30px",

  "&:hover": {
    opacity: 0.4,
    background: "transparent",
  },

  [theme.breakpoints.down(950)]: {
    display: "block",
    margin: "auto",
    fontSize: "calc(clamp(28px,3.75vw,10vh) * 1.5)",
    marginTop: "0.4em",
    marginBottom: "0.4em",
    lineHeight: "1",
  },
}));

const ResponsiveArticleBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "auto",
  maxWidth: "1730px",

  [theme.breakpoints.down(950)]: {
    display: "block",
    maxWidth: "1450px",
    marginBottom: "60px",
  },
}));

const StyledTitleWrapper = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(20px,2.5vw,45px)",
  [theme.breakpoints.down(768)]: {
    marginBottom: "10px",
    fontSize: "18px",
  },
}));

const ResponsiveMiddleIndividualArticleBox = styled(Box)(({ theme }) => ({
  width: "50%",
  display: "flex",

  [theme.breakpoints.down(1220)]: {
    width: "100%",
    flexDirection: "column",
  },
}));

const ResponsiveIndividualArticleBox = styled(Box)(({ theme }) => ({
  width: "46.5%",
  [theme.breakpoints.down(1220)]: {
    width: "90%",
  },

  [theme.breakpoints.down(950)]: {
    width: "100%",
  },
}));

const ResponsiveArticleTypo = styled(Box)(({ theme }) => ({
  fontSize: "clamp(18px,1.25vw,3.33vh)",
  fontWeight: "400",
  width: "100%",
  marginTop: "75px",
  marginBottom: "30px",
  lineHeight: "1.2",

  [theme.breakpoints.down(1220)]: {
    marginTop: "unset",
  },
}));

const StyledNavigateText = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "clamp(12px,1.25vw,3.33vh)",
  width: "fill-available",
  "& img": {
    height: "clamp(20px,2vw,45px)",
    transition: "transform 200ms ease-out 0s",
  },
}));

const StyledNewsWrapper = styled(Box)(({ theme }) => ({
  paddingTop: "85px",
  minHeight: "775px",
  paddingLeft: "37px",
  paddingRight: "37px",
  paddingBottom: "10px",
  backgroundColor: "white",
  [theme.breakpoints.down(1366)]: {
    paddingTop: "59px",
    minHeight: "529px",
  },
  [theme.breakpoints.down(768)]: {
    paddingTop: "29px",
    minHeight: "339px",
  },
}));

const StyledNewsContainer = styled(Box)(({ theme }) => ({
  margin: "0px 64px",
  "& .news-header": {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "133px",
    flexDirection: "row-reverse",
  },
  [theme.breakpoints.down(1366)]: {
    margin: "0px 32px",
    "& .news-header": {
      marginBottom: "95px",
    },
  },
  [theme.breakpoints.down(768)]: {
    "& .news-header": {
      display: "block",
      marginBottom: "19px",
    },
    margin: "0px",
  },
}));

const StyledIconWrapper = styled("div")({
  height: "100%",
  display: "flex",
  alignItems: "center",
  marginLeft: "10px",
});

const StyledForwardIcon = styled(ArrowForwardIcon)({
  position: "absolute",
  fontWeight: "500",
  fontSize: "clamp(22px,1.67vw,4.44vh)",
});

const MediumArticleBox = () => {
  return (
    <ResponsiveIndividualArticleBox
      sx={{
        margin: "auto",
      }}
    >
      <img src="picture3.png" style={{ width: "100%" }} />
      <ResponsiveArticleTypo>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi
      </ResponsiveArticleTypo>
    </ResponsiveIndividualArticleBox>
  );
};

const scrollToptoFeature = (a: any) => {
  window.scrollTo({
    top: a,
    behavior: "smooth",
  });
};

const scrollToContact = () => {
  const contactElement = document.getElementById("contactId");
  if (contactElement) {
    const { top } = contactElement.getBoundingClientRect();
    const scrollPosition = window.scrollY;
    window.scrollTo({
      top: scrollPosition + top,
      behavior: "smooth",
    });
  }
};

const contactObject = { id: "contactId" };

const HomePage = () => {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [copyEmail1, setCopyEmail1] = useState("holla@controltheory.io");
  const [copyEmail2, setCopyEmail2] = useState("work@controltheory.io");
  const navigate = useNavigate();

  const copyingEmail1 = () => {
    navigator.clipboard.writeText(copyEmail1);
    setCopyEmail1("Copied");
    setTimeout(() => {
      setCopyEmail1("holla@controltheory.io");
    }, 800);
  };

  const copyingEmail2 = () => {
    navigator.clipboard.writeText(copyEmail2);
    setCopyEmail2("Copied");
    setTimeout(() => {
      setCopyEmail2("work@controltheory.io");
    }, 800);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial screen size
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="homepageElement">
      <Box>
        <PageHeader />
      </Box>
      <StyledBannerContainer>
        <PageHeaderContentBox className="pagesHeader">
          <Box sx={{ margin: "auto" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "clamp(720px,65.5vw,90vw)",
                margin: "auto",
                paddingLeft: "20px",
                paddingRight: "20px",
                width: "90vw",
              }}
            >
              <Typography
                style={{
                  textAlign: "center",
                  fontSize: "clamp(28px,3.4vw,10vh)",
                  lineHeight: "125%",
                  fontFamily: "Nunito Sans",
                }}
              >
                We build
                <FuzzyText string=" digital realms, " />
                one line of code and pixel at a time. Meet the team behind
                immersive,
                <FuzzyText string=" award-winning games " />
                players can't get enough of.
              </Typography>
            </Box>
            <Box sx={{ height: "clamp(28px,5vw,13.33vh)" }}></Box>
            <ResponsiveNavButtonBox>
              <NavButton
                disableRipple
                onClick={() => {
                  navigate("/about");
                }}
              >
                About
                <StyledIconWrapper>
                  <StyledForwardIcon />
                </StyledIconWrapper>
              </NavButton>
              <NavButton
                disableRipple
                onClick={() => {
                  navigate("/news-list");
                }}
              >
                News
                <StyledIconWrapper>
                  <StyledForwardIcon />
                </StyledIconWrapper>
              </NavButton>
              <NavButton
                disableRipple
                onClick={() => {
                  navigate("/careers");
                }}
              >
                Careers
                <StyledIconWrapper>
                  <StyledForwardIcon />
                </StyledIconWrapper>
              </NavButton>
            </ResponsiveNavButtonBox>
          </Box>
        </PageHeaderContentBox>
        <Box
          sx={{
            background: "#C2C2C2",
            backgroundBlendMode: "darken",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <ResponsiveNavPageButtonBox>
            <NavPageButton
              disableRipple
              onClick={() => scrollToptoFeature(screenSize.height)}
              style={{ justifyContent: "flex-start" }}
            >
              <StyledNavigateText>
                Featured Case
                <img src="/icons/arrow_down.svg" alt="arrow" />
              </StyledNavigateText>
            </NavPageButton>
            <NavPageButton disableRipple onClick={scrollToContact}>
              <StyledNavigateText>
                Talk To Us
                <img src="/icons/arrow_down.svg" alt="arrow" />
              </StyledNavigateText>
            </NavPageButton>
          </ResponsiveNavPageButtonBox>
        </Box>
      </StyledBannerContainer>
      <ResponsiveFeatureBox>
        <ResponsiveFeatureTypoBox>
          <Typography
            style={{
              fontSize: "clamp(28px,1.67vw,4.44vh)",
              fontWeight: "700",
              color: "white",
              marginBottom: "16px",
              lineHeight: "1",
              fontFamily: "Nunito Sans",
            }}
          >
            Audioclash: <br />
            Battle of the Bands
          </Typography>
          <Typography
            style={{
              fontSize: "clamp(18px,1.25vw,3.33vh)",
              fontWeight: "400",
              color: "white",
              lineHeight: "1.3",
              fontFamily: "Nunito Sans",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisiLorem
            ipsum dolor sit amet.
          </Typography>
          <Typography
            style={{
              fontSize: "clamp(14px,0.94vw,2.5vh)",
              fontWeight: "400",
              color: "white",
              opacity: "0.65",
              marginBottom: "clamp(8px,0.83vw,2.22vh)",
              fontFamily: "Nunito Sans",
            }}
          >
            Brand awareness - Team extension
          </Typography>
          <NavButton
            disableRipple
            style={{
              fontSize: "clamp(18px,1.25vw,3.33vh)",
              fontWeight: "700",
              paddingLeft: "unset",
              color: "white",
              margin: "unset",
              display: "flex",
              justifyContent: "flex-start",
              lineHeight: "1",
              fontFamily: "Nunito Sans",
            }}
          >
            View Case
            {/* <ArrowForwardIcon
                style={{
                  fontSize: "clamp(30px,1.25vw,50px)",
                  color: "white",
                  fontWeight: "700",
                  paddingLeft: "10px",
                }}
              /> */}
          </NavButton>
        </ResponsiveFeatureTypoBox>

        <ResponsiveFeatureImgBox>
          <img src="featuredCaseImg.png" />
        </ResponsiveFeatureImgBox>
      </ResponsiveFeatureBox>
      <Box
        sx={{
          backgroundImage: `url('workboxpartnerboxBackground copy.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          paddingBottom: "clamp(max(45px,3.75vh),7.5vw,min(144px,15vh))",
        }}
      >
        <CompanyButtonBox>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "1172px",
              margin: "auto",
              paddingTop: "clamp(max(45px,3.75vh),7.5vw,min(144px,15vh))",
            }}
          >
            <CompanyTypo>
              We work with <b>100+ brands</b> around Europe and the US,
              including:
            </CompanyTypo>
          </Box>
          <PartnerBox>
            <CompanyBox />
          </PartnerBox>
        </CompanyButtonBox>
        <StyledFeaturedWork>
          <WorkButtonBox>
            <StyledTitleWrapper>Featured Work</StyledTitleWrapper>
            <AllWorkButton disableRipple>
              All Work
              <ArrowForwardIcon />
            </AllWorkButton>
          </WorkButtonBox>
          <Box
            sx={{
              margin: "auto",
              maxWidth: "1730px",
              paddingBottom: "20px",
            }}
          >
            <WorkBox />
          </Box>
        </StyledFeaturedWork>
      </Box>
      <Box
        sx={{
          backgroundColor: "#C2C2C2",
          paddingTop: "20px",
          paddingLeft: "30px",
          paddingRight: "30px",
          paddingBottom: "20px",
        }}
      >
        <ResponsiveBoxGmailInfo>
          <Box>
            <StyledEmailTitle>Our inbox is missing you:</StyledEmailTitle>
            <ResponsiveGmailInfoButton onClick={copyingEmail1} disableRipple>
              {copyEmail1}
            </ResponsiveGmailInfoButton>
          </Box>
          <ResponsiveBoxGmailInfoRight>
            <StyledEmailTitle>Apply for work:</StyledEmailTitle>
            <ResponsiveGmailInfoButton onClick={copyingEmail2} disableRipple>
              {copyEmail2}
            </ResponsiveGmailInfoButton>
          </ResponsiveBoxGmailInfoRight>
        </ResponsiveBoxGmailInfo>
      </Box>
      <ContactForm contactId={contactObject.id} />
      <StyledNewsWrapper>
        <StyledNewsContainer>
          <div className="news-header">
            <AllWorkButton
              disableRipple
              onClick={() => {
                navigate("/news-list");
              }}
            >
              See All
              <ArrowForwardIcon />
            </AllWorkButton>
          </div>
          <NewsBox />
        </StyledNewsContainer>
      </StyledNewsWrapper>
      <StyledBottomMenu>
        <ResponsiveBoxBottomMenu>
          <ResponsiveBottomMenuButton disableRipple>
            <span>Our Work</span>
            {/* <FuzzyText string="Our Work" /> */}
          </ResponsiveBottomMenuButton>
          <ResponsiveBottomMenuButton disableRipple>
            <span>About Us</span>
            {/* <FuzzyText string="About Us" /> */}
          </ResponsiveBottomMenuButton>
          <ResponsiveBottomMenuButton disableRipple>
            <span>Careers</span>
            {/* <FuzzyText string="Careers" /> */}
          </ResponsiveBottomMenuButton>
        </ResponsiveBoxBottomMenu>
      </StyledBottomMenu>
      <Box>
        <PageFooter />
      </Box>
    </div>
  );
};

export default HomePage;
