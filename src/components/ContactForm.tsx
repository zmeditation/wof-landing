import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const StyledContactUsContainer = styled(Box)(({ theme }) => ({
  height: "clamp(720px, 45vw, 790px)",
  paddingTop: "clamp(max(30px,2.5vh),5vw,min(96px,10vh))",
  paddingLeft: "40px",
  paddingRight: "40px",
  backgroundImage: `url('partnerSectionBackground.png')`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",

  [theme.breakpoints.down(900)]: {
    padding: "clamp(max(30px,2.5vh),5vw,min(96px,10vh))",
    height: "fit-content",
  },
}));

const ResponsiveContactBoxA = styled(Box)(({ theme }) => ({
  maxWidth: "53%",
  margin: "auto",
  justifyContent: "space-between",
  display: "flex",
  marginBottom: "30px",

  [theme.breakpoints.down("md")]: {
    display: "block",
    marginBottom: "unset",
    maxWidth: "100%",
  },
}));

const ResponsiveContactBoxB = styled(Box)(({ theme }) => ({
  maxWidth: "53%",

  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));

const StyledFormHeadText = styled("div")(({ theme }) => ({
  padding:
    "0px clamp(max(30px,2.5vh),5vw,min(96px,10vh)) clamp(max(30px,2.5vh),5vw,min(96px,10vh))",
}));

const StyledInputlabel = styled(InputLabel)(({ theme }) => ({
  color: "rgba(0, 0, 0, 0.5)",
  fontSize: "24px",
  fontWeight: "500",
  lineHeight: "140%",
  fontFamily: "Nunito Sans",
  "&.Mui-focused": {
    color: "rgba(0, 0, 0, 0.5)",
  },
}));

const ResponsiveContactChildBox = styled(Box)(({ theme }) => ({
  width: "49%",

  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginBottom: "20px",
  },
}));

const ContactTypoA = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(20px,2.5vw,6.67vh)",
  fontWeight: "700",
  textAlign: "center",
  fontFamily: "Nunito Sans",
  lineHeight: "1.2",
  marginBottom: "clamp(8px,0.83vw,2.22vh)",
  letterSpacing: "0px",
}));

const ContactTypoB = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(18px,1.25vw,3.33vh)",
  fontWeight: "400",
  textAlign: "center",
  fontFamily: "Nunito Sans",
  letterSpacing: "0px",
}));

const ResponsiveContactCheckBox = styled(Box)(({ theme }) => ({
  maxWidth: "53%",
  display: "flex",
  justifyContent: "space-between",
  margin: "auto",

  [theme.breakpoints.down("md")]: {
    display: "block",
    marginLeft: "unset",
    maxWidth: "100%",
  },
}));

const CheckBoxTypo = styled(Typography)(({ theme }) => ({
  maxWidth: "367px",
  fontSize: "clamp(10px,1.04vw,15px)",
  fontWeight: "400",
  marginLeft: "12px",

  [theme.breakpoints.down("md")]: {
    marginLeft: "unset",
    maxWidth: "100%",
  },
}));

const ContactInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    position: "relative",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    fontSize: 19,
    width: "100%",
    height: "40px",
    padding: "10px 12px",
    fontFamily: "Nunito Sans",
  },
}));

const ContactTextField = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    position: "relative",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    fontSize: 19,
    width: "100%",
    padding: "16px 12px",
    fontFamily: "Nunito Sans",
  },
}));

const BpIcon = styled("span")(({ theme }) => ({
  width: 28,
  height: 28,
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#137cbd",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 28,
    height: 28,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
    backgroundColor: "grey",
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

// Inspired by blueprintjs
function BpCheckbox(props: CheckboxProps) {
  return (
    <Checkbox
      sx={{
        "&:hover": { bgcolor: "transparent" },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
}

interface ContactFormProps {
  contactId: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ contactId }) => {
  return (
    <div id={contactId}>
      <StyledContactUsContainer>
        <StyledFormHeadText>
          <ContactTypoA>Send us email without sending us email</ContactTypoA>
          <ContactTypoB>That's what forms are for, right?</ContactTypoB>
        </StyledFormHeadText>
        <ResponsiveContactBoxA>
          <ResponsiveContactChildBox>
            <FormControl variant="standard" style={{ width: "100%" }}>
              <StyledInputlabel shrink>Your name</StyledInputlabel>
              <ContactInput id="contact-input" />
            </FormControl>
          </ResponsiveContactChildBox>
          <ResponsiveContactChildBox>
            <FormControl variant="standard" style={{ width: "100%" }}>
              <StyledInputlabel shrink>Your email</StyledInputlabel>
              <ContactInput id="contact-input" />
            </FormControl>
          </ResponsiveContactChildBox>
        </ResponsiveContactBoxA>
        <ResponsiveContactBoxB
          sx={{
            margin: "auto",
            marginBottom: "30px",
          }}
        >
          <FormControl variant="standard" style={{ width: "100%" }}>
            <StyledInputlabel shrink>Your brief in short</StyledInputlabel>
            <ContactTextField id="contact-input" multiline rows={10} />
          </FormControl>
        </ResponsiveContactBoxB>
        <ResponsiveContactCheckBox>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <BpCheckbox />
            <CheckBoxTypo>
              I consent that my personal data is stored and processed as
              descried in the
              <Link href="#" style={{ color: "black" }}>
                {" "}
                privacy policy
              </Link>
              .
            </CheckBoxTypo>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              disableRipple
              style={{
                fontFamily: "Nunito Sans",
                color: "black",
                fontSize: "24px",
                fontWeight: "700",
                backgroundColor: "transparent",
                textTransform: "none",
              }}
            >
              Send
              <ArrowForwardIcon
                style={{ fontWeight: "700", fontSize: "24px" }}
              />
            </Button>
          </Box>
        </ResponsiveContactCheckBox>
      </StyledContactUsContainer>
    </div>
  );
};

export default ContactForm;
