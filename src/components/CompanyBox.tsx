import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const itemData = [
  {
    img: "partner1.png",
    title: "Google",
  },
  {
    img: "partner2.png",
    title: "Real Networks",
  },
  {
    img: "partner3.png",
    title: "Spin Master Ltd.",
  },
  {
    img: "partner4.png",
    title: "SONY",
  },
  {
    img: "partner5.png",
    title: "Media Monks",
  },
  {
    img: "partner6.png",
    title: "GameHouse",
  },
  {
    img: "partner7.png",
    title: "Big Boat Interactive",
  },
  {
    img: "partner8.png",
    title: "WIRED",
  },
  {
    img: "partner9.png",
    title: "WIRED",
  },
  {
    img: "partner10.png",
    title: "WIRED",
  },
  {
    img: "partner11.png",
    title: "WIRED",
  },
  {
    img: "partner12.png",
    title: "WIRED",
  },
];

const CompanyBox = () => {
  const StyledImgItem = styled(Grid)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "25%",
    [theme.breakpoints.down(950)]: {
      width: "33.3%",
    },
    "& img": {
      maxWidth: "100%",
      width: "80%",
    },
  }));

  return (
    <Grid container spacing={2}>
      {itemData.map((item, key) => (
        <StyledImgItem item key={key}>
          <img src={`${item.img}`} alt={item.title} loading="lazy" />
        </StyledImgItem>
      ))}
    </Grid>
  );
};

export default CompanyBox;
