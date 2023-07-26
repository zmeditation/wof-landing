import { styled } from "@mui/material/styles";

const itemData = [
  {
    img: "images/WheelofFortune.jpg",
    title: "Wheel of Fortune",
  },
  {
    img: "images/TechDeckSkateboarding.jpg",
    title: "Tech Deck Skateboarding",
  },
  {
    img: "images/HotelEverAfter.jpg",
    title: "Hotel Ever After: Ellas Wish",
  },
  {
    img: "images/Macy’sWishwriter.jpg",
    title: "Audio Clash",
  },
  {
    img: "images/Dragonfly.jpg",
    title: "Dragonfly",
  },
  {
    img: "images/TechDeckSkateboarding1.jpg",
    title: "Exodus of Souls",
  },
];

const StyledContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridRow: "auto / auto",
  gap: "40px 36px",
  [theme.breakpoints.down(1200)]: {
    gridTemplateColumns: "1fr 1fr",
  },
  [theme.breakpoints.down(600)]: {
    gridTemplateColumns: "1fr",
  },
}));

const StyledWorkItem = styled("a")(({ theme }) => ({
  display: "grid",
  gap: "10px",
  textDecoration: "none",
  transition: "filter 500ms ease-out 0s",
  cursor: "pointer",
  "& .title": {
    fontSize: "36px",
    [theme.breakpoints.down(1520)]: {
      fontSize: "26px",
    },
    [theme.breakpoints.down(770)]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down(600)]: {
      fontSize: "26px",
    },
  },
  "&:hover": {
    "& .picture": {
      transition: "transform 500ms ease-out 0s",
      transform: "scale(1.04)",
    },
  },
  [theme.breakpoints.down(1200)]: {},
}));

const StyledPictureContainer = styled("div")(({ theme }) => ({
  borderRadius: "4px",
  overflow: "hidden",
  height: "100%",
  "& .picture": {
    height: "100%",
    width: "100%",
    position: "relative",
    transform: "scale(1)",
    transition: "transform 500ms ease-out 0s",
  },
  "& .picture img": {
    height: "100%",
    width: "100%",
  },
  [theme.breakpoints.down(1200)]: {},
}));

const WorkBox = () => {
  return (
    <StyledContainer>
      {itemData.map((item, index) => (
        <StyledWorkItem>
          <StyledPictureContainer>
            <div className="picture">
              <img src={item.img} alt="work_img"></img>
            </div>
          </StyledPictureContainer>
          <span className="title">{item.title}</span>
        </StyledWorkItem>
      ))}
    </StyledContainer>
  );
};

export default WorkBox;
