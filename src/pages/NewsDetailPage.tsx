import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style.css";
import { styled } from "@mui/material/styles";
import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";
import { Box } from "@mui/material";
import * as contentful from "contentful";
import { contentfulAccessToken, contentfulSpace } from "../constant";

const StyledNewsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  minHeight: "100vh",
}));

const StyledNewsContent = styled(Box)(({ theme }) => ({
  margin: "150px 0px",
  display: "flex",
  justifyContent: "center",

  [theme.breakpoints.down("sm")]: {},
}));

const StyledMainContent = styled(Box)(({ theme }) => ({
  maxWidth: "680px",
  margin: "0px 24px",
  [theme.breakpoints.down("sm")]: {},
}));

const StyledNewsTitle = styled(Box)(({ theme }) => ({
  letterSpacing: "-0.011em",
  lineHeight: "52px",
  marginBottom: "32px",
  fontSize: "42px",
  marginTop: "0px",
  fontWeight: 700,
  color: "rgba(41, 41, 41, 1)",
  [theme.breakpoints.down(552)]: {
    letterSpacing: "-0.014em",
    lineHeight: "38px",
    marginBottom: "24px",
    fontSize: "32px",
  },
}));

const StyledNewsDesc = styled(Box)(({ theme }) => ({
  letterSpacing: "-0.003em",
  lineHeight: "32px",
  marginTop: "2em",
  fontSize: "20px",
  marginBottom: "-0.46em",
  [theme.breakpoints.down(552)]: {
    lineHeight: "28px",
    marginTop: "1.56em",
    fontSize: "18px",
  },
}));

const StyledNewsImg = styled(Box)(({ theme }) => ({
  marginTop: "56px",
  clear: "both",
  margin: "0 auto",
  "& img": {
    width: "100%",
  },
  [theme.breakpoints.down(552)]: {
    marginTop: "40px",
  },
}));

interface PostType {
  fields: {
    internalName: String | "";
    image: any;
    bodyText: any;
  };
}

const NewsDetailPage = () => {
  const [post, setPost] = useState<PostType>();
  const { slug } = useParams();

  const fetchContentData = async () => {
    var client = contentful.createClient({
      space: contentfulSpace,
      accessToken: contentfulAccessToken,
    });

    const response: any = await client.getEntries();
    const newsData = response.items?.filter((r: any) => {
      return r.fields.slug === slug;
    });
    return newsData[0];
  };

  useEffect(() => {
    fetchContentData().then((result) => {
      setPost(result);
    });
  }, []);

  const newsData = post?.fields;

  return (
    <StyledNewsContainer>
      <Box>
        <PageHeader />
      </Box>
      <StyledNewsContent>
        <StyledMainContent>
          <StyledNewsTitle>
            <span>{newsData?.internalName}</span>
          </StyledNewsTitle>
          <StyledNewsDesc>
            <p>{newsData?.bodyText.content[0].content[0].value}</p>
          </StyledNewsDesc>
          <StyledNewsImg>
            <img
              src={`https:${newsData?.image.fields.file.url}`}
              alt="news-img"
            ></img>
          </StyledNewsImg>
        </StyledMainContent>
      </StyledNewsContent>
      <Box>
        <PageFooter />
      </Box>
    </StyledNewsContainer>
  );
};

export default NewsDetailPage;
