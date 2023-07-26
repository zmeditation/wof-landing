import React, { useEffect, useState } from "react";
import * as contentful from "contentful";
import { contentfulAccessToken, contentfulSpace } from "../constant";
import { useNavigate } from "react-router-dom";
import "../style.css";
import { styled } from "@mui/material/styles";
import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";
import { Box } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { formatTextWithLength } from "../util";

const NewsAllPage = () => {
  const [posts, setPosts] = useState<any>([]);
  const navigate = useNavigate();

  const fetchContentData = async () => {
    var client = contentful.createClient({
      space: contentfulSpace,
      accessToken: contentfulAccessToken,
    });

    const response: any = await client.getEntries();

    return response.items;
  };

  useEffect(() => {
    fetchContentData().then((result) => {
      setPosts(result);
    });
  }, []);

  const StyledNewsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "100vh",
  }));

  const StyledNewsLists = styled(Box)(({ theme }) => ({
    padding: "150px 30px",
    margin: "auto",
    maxWidth: "1460px",
  }));

  const StyledImageListItem = styled(ImageListItem)(({ theme }) => ({
    height: "clamp(80px, 25vw, 380px) !important",
    cursor: "pointer",
    "& .news-text": {
      position: "absolute",
      left: "20px",
      bottom: "13px",
    },
    "& .news-title": {
      color: "white",
      fontSize: "clamp(20px,1.25vw,33.6px)",
      fontWeight: 700,
      width: "100px",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      fontFamily: "Nunito Sans",
      marginBottom: "10px",
    },
    "& .news-desc": {
      color: "white",
      fontSize: "clamp(18px,1.25vw,3.33vh)",
      fontWeight: "400",
      lineHeight: "1.3",
      fontFamily: "Nunito Sans",
      maxWidth: "clamp(200px,15vw,300px)",
      height: "clamp(60px,7vw,100px)",
      paddingTop: "10px",
    },
    [theme.breakpoints.down(1200)]: {
      "& .news-desc": {
        paddingBottom: "20px",
      },
    },
    [theme.breakpoints.down(950)]: {
      "& .news-desc": {
        display: "none",
      },
    },
  }));

  const posts_arr: any = [];

  posts.map((p: any, index: number) => {
    if (index === 0) {
      p.fields.cols = 5;
    } else if (index === 1) {
      p.fields.cols = 3;
    } else if (posts[index - 1].fields.cols === posts[index - 2].fields.cols) {
      p.fields.cols = posts[index - 3].fields.cols;
    } else {
      p.fields.cols = posts[index - 1].fields.cols;
    }

    posts_arr.push(p.fields);
  });

  return (
    <StyledNewsContainer>
      <Box>
        <PageHeader />
      </Box>
      <StyledNewsLists>
        <ImageList
          variant="quilted"
          cols={8}
          rowHeight={121}
          style={{ gap: "30px" }}
        >
          {posts_arr?.map((item: any, index: number) => (
            <StyledImageListItem
              key={index}
              cols={item.cols || 1}
              rows={2.5 || 1}
              onClick={() => {
                navigate(`/news/${item.slug}`);
              }}
            >
              <img
                width={index % 2 === 0 ? 3 * 121 : 5 * 121}
                height={121 * 2.5}
                src={`https:${item?.image.fields.file.url}`}
                alt={item.title}
                loading="lazy"
              />
              <div className="news-text">
                <span className="news-title">{item?.internalName}</span>
                <div className="news-desc">
                  {formatTextWithLength(
                    item?.bodyText.content[0].content[0].value,
                    70
                  )}
                </div>
              </div>
            </StyledImageListItem>
          ))}
        </ImageList>
      </StyledNewsLists>
      <Box>
        <PageFooter />
      </Box>
    </StyledNewsContainer>
  );
};

export default NewsAllPage;
