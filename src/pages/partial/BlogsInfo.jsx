/** @format */

// IMPORT RELATED TO REACT
import React from "react";
import { useParams } from "react-router-dom";

// IMPORT CHAKRA UI RELATED
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

// IMPORT CREATE CONTEXT RELATED / THIS IS FOR LOADING SCREEN
import { useLoading } from "../../components/context/LoadingContext";

// LOADING SCREEN COMPONENTS
import LoadingScreenComponents from "../../components/loading-screen/LoadingScreenComponents";

// IMPORT RELATED TO JSON FILE

// IMPORT RELATED TO COMPONENTS
import { BlogsInfoData } from "../../components/json/BlogsInfoData";
import BlogsInfoContent from "../../components/page-components/blogs-components/blogs-info/BlogsInfoContent";
import BlogsSuggestedContent from "../../components/page-components/blogs-components/blogs-info/blogs-suggested/BlogsSuggestedContent";

export const BlogsInfo = () => {
  const { loading } = useLoading();
  const { url } = useParams();

  const currentItem = BlogsInfoData.Blogs.find((el) => el.url === url);


  if (!currentItem) {
    // Handle case when currentItem is not found
    return (
      <Box py={40} px={10}>
        <Text>Item not found</Text>
      </Box>
    );
  }

  return (
    <>
      {loading ? (
        <LoadingScreenComponents />
      ) : (
        <Box as="section">
          <Container maxW="container.xl" mx="auto" py={40}>
            <Heading as="h2" fontSize="28px" pb={10}>
              {currentItem.title}
            </Heading>

            <Flex flexDir={{ base: "column", md: "row" }} gap={5}>
              <Box w={{ sm: "100%", md: "55%", lg: "65%" }}>
                <BlogsInfoContent currentItem={currentItem} />
              </Box>

              <Box w={{ md: "45%", lg: "45%" }} py={7} h="100%">
                <BlogsSuggestedContent />
              </Box>
            </Flex>
          </Container>
        </Box>
      )}
    </>
  );
};
