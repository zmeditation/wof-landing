import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import * as contentful from "contentful";
import { BlogItem } from "./BlogItem";
import { contentfulAccessToken, contentfulSpace } from "../constant";

export const NewsBox = () => {
  const StyledNewsItemList = styled("div")(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: "30px",
    overflowY: "hidden",
    overflowX: "auto",
    paddingBottom: "50px",
    [theme.breakpoints.down(1200)]: {
      gridTemplateColumns: "1fr 1fr",
    },
    [theme.breakpoints.down(768)]: {
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      paddingBottom: "30px",
    },
  }));

  const [posts, setPosts] = useState([]);

  const fetchContentData = async () => {
    var client = contentful.createClient({
      space: contentfulSpace,
      accessToken: contentfulAccessToken,
    });

    const response: any = await client.getEntries();
    return response.items.slice(0, 4);
  };

  useEffect(() => {
    fetchContentData().then((result) => {
      setPosts(result);
    });
  }, []);

  return (
    <StyledNewsItemList>
      {posts?.map(({ fields }, i) => (
        <BlogItem key={i} fields={fields} />
      ))}
    </StyledNewsItemList>
  );
};
