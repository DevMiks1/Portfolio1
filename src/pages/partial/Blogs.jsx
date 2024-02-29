/** @format */

import { Avatar, Box, Container, Flex, Img, Text } from "@chakra-ui/react";

import BlogsContent1 from "../../components/page-components/blogs-components/blogs/BlogsContent1";

import { useLoading } from "../../components/context/LoadingContext";
import LoadingScreenComponents from "../../components/loading-screen/LoadingScreenComponents";
export const Blogs = () => {
  const {loading} = useLoading();
  return (
    <>
      {loading ? (
        <LoadingScreenComponents />
      ) : (
        <Box as="section" fontFamily="poppins">
          <Container maxW="container.xl" py={28}>
            <Text as="h2" align="center" fontSize="30px" fontWeight="bold" pb={20}>
              MIKEE'S BLOGS ARE ONGOING
            </Text>
            

            <Flex justify="space-between" flexWrap="wrap" borderBottom="1px solid white" pb={10}>
              <BlogsContent1 />
            </Flex>

            <Text as="h2" align="center" fontSize="30px" fontWeight="bold" py={20}>
              COMING SOON
            </Text>
          </Container>
        </Box>
      )}
    </>
  );
};
