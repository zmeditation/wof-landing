import { styled } from "@mui/material/styles";

interface SpecialTextProps {
  string: string;
}
export const SpecialText = ({ string }: SpecialTextProps) => {
  const SpecialText = styled("span")(({ theme }) => ({
    fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
  }));

  return <SpecialText>{string}</SpecialText>;
};
