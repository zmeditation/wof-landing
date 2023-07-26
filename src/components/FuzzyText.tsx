import { styled } from "@mui/material/styles";
import Link from "@mui/material/Link";
import { SpecialText } from "./SpecialText";
interface FuzzyProps {
  string: string;
}
export const FuzzyText = ({ string }: FuzzyProps) => {
  const HeaderContentLink = styled(Link)(({ theme }) => ({
    fontWeight: "700",
    color: "black",
    display: "inline-flex",
    transition: "all .5s",
  }));

  const arr = string.split("");

  return (
    <HeaderContentLink href="#" underline="none">
      {arr.map((letter, index) => (
        <span key={index}>
          {letter === " " ? (
            "\u00A0"
          ) : letter === "-" ? (
            <SpecialText string="-"></SpecialText>
          ) : (
            letter
          )}
        </span>
      ))}
    </HeaderContentLink>
  );
};
