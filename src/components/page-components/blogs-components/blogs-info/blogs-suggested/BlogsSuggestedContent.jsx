/** @format */

// IMPORT CHAKRA UI RELATED
import { Box, Heading } from "@chakra-ui/react";

// IMPORT RELATED TO COMPONENTS
import BlogsSuggestedCategory from "./BlogsSuggestedCategory";
import { BlogsInfoData } from "../../../../json/BlogsInfoData";
import { useParams } from "react-router-dom";

const BlogsSuggestedContent = () => {

  const {url} = useParams()

  const currentItem = BlogsInfoData.Blogs.find((el) => el.url === url)
  console.log(currentItem);
  return (
    <Box>
      <Box
        pb={10}
        borderBottom="2px solid white"
        data-aos="zoom-in-up"
        data-aos-duration="700"
      >
        <Heading as="h2" textAlign="center" fontWeight="bold" fontSize="24px">
          SUGGESTED ARTICLES
        </Heading>
      </Box>
      {BlogsInfoData.Blogs.filter((suggest) => suggest.url !== currentItem.url).map(
        (suggest) => {
          const { id, img, alt, title, url, date } = suggest;
          return (
            <Box py={5} key={id}>
              <BlogsSuggestedCategory
                img={img}
                title={title}
                alt={alt}
                url={url}
                date={date}
              />
            </Box>
          );
        }
      )}
    </Box>
  );
};

export default BlogsSuggestedContent;
