import { styled } from "@mui/material/styles";

export const SymbolBtn = () => {
  const StyledSVG = styled("svg")(({ theme }) => ({
    width: "clamp(27px, 1.75vw, 42px)",
    maxWidth: "42px",
    height: "clamp(27px, 1.75vw, 42px)",
    maxHeight: "42px",
    transition: "fill 200ms ease-out 0s",
    cursor: "pointer",
    "& .vert1": {
      transition: "transform 700ms ease-in-out 0s",
      transformOrigin: "center center",
    },
    "& .vert2": {
      transition: "transform 700ms ease-in-out 0s",
      transformOrigin: "center center",
    },
    "&:hover": {
      opacity: 0.7,
      transform: "scale(0.975)",
      backgroundColor: "transparent",
    },
  }));
  return (
    <StyledSVG viewBox="0 0 41 40" fill="none">
      <path
        className="vert1"
        d="M17.6,17.2V0h5.6v17.2l0,5.5V40h-5.6V22.7L17.6,17.2z"
      ></path>
      <polygon
        className="vert2"
        points="23.3,22.7 41,22.7 41,17.2 23.3,17.2 17.6,17.2 0,17.2 0,22.7 17.6,22.7 "
      ></polygon>
    </StyledSVG>
  );
};
