import { styled } from "@mui/material/styles";
import { formatTextWithLength } from "../util";

interface BlogItemProps {
  fields: any;
}

export const BlogItem = (props: BlogItemProps) => {
  const { internalName, image, bodyText, slug } = props.fields;

  const StyledNewsItem = styled("div")(({ theme }) => ({
    display: "block",
    width: "100%",
    "& .news-img": {
      height: "clamp(160px, 12vw, 225px)",
      backgroundImage: `url(https:${image.fields.file.url})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
      marginBottom: "35px",
      cursor: "pointer",
    },
    "& .news-title": {
      position: "absolute",
      color: "white",
      fontSize: "33.6px",
      fontWeight: 700,
      width: "80%",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      left: "15px",
      bottom: "13px",
    },
    "& .news-desc": {
      fontSize: "clamp(18px,1.25vw,3.33vh)",
      fontWeight: "400",
      lineHeight: "1.3",
      fontFamily: "Nunito Sans",
    },
    [theme.breakpoints.down(1366)]: {
      "& .news-img": {
        marginBottom: "25px",
      },
      "& .news-title": {
        fontSize: "23.6px",
      },
      "& .news-desc": {
        // fontSize: "15px",
        // lineHeight: "1.1",
        // textTransform: "lowercase",
      },
    },
    [theme.breakpoints.down(1200)]: {
      "& .news-img": {
        height: "clamp(160px, 25vw, 300px)",
      },
      "& .news-desc": {
        // fontSize: "21px",
      },
    },
    [theme.breakpoints.down(768)]: {
      "& .news-img": {
        width: "275px",
        height: "155px",
        marginBottom: "0px",
      },
      "& .news-desc": {
        display: "none",
      },
    },
  }));

  const desc_text = formatTextWithLength(
    bodyText.content[0].content[0].value,
    190
  );

  return (
    <StyledNewsItem>
      <a href={`/news/${slug}`} target="_blank">
        <div className="news-img">
          <span className="news-title">{internalName}</span>
        </div>
      </a>
      <div className="news-desc">{desc_text}</div>
    </StyledNewsItem>
  );
};
