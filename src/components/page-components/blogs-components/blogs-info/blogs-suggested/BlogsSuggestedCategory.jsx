/** @format */

// IMPORT RELATED TO REACT

// IMPORT CHAKRA UI RELATED
import { Box, Flex, Img, Link, Text } from "@chakra-ui/react";

// IMPORT CREATE CONTEXT RELATED / THIS IS FOR LOADING SCREEN
import { useLoading } from "../../../../context/LoadingContext";

const BlogsSuggestedCategory = ({ img, title, alt, url, date }) => {
  const { setLoadingState } = useLoading();
  const handleClick = () => {
    setLoadingState(true);
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoadingState(false);
    }, 2000);
  };
  return (
    
    <Flex gap={5}>
      <Box w="55%" data-aos="zoom-in" data-aos-duration="700">
        <Img
          src={img}
          alt={alt}
          h={{ base: "100%", md: "100%", lg: "150px" }}
          w="100%"
        />
      </Box>

      <Box w="45%" data-aos="zoom-in-up" data-aos-duration="700">
        <Box borderRadius="15px">
          <Text bg="blue.600" borderRadius={10} textAlign="center" mb={5} fontSize="14px" mr={3}>
             {date}
          </Text>
        </Box>
        <Link
          href={url}
          isExternal
          _hover={{ color: "gray.300", transition: "0.3s", textDecor: "none" }}
        >
          <Text as="h3" pr={3} onClick={handleClick}>
            {title}
          </Text>
        </Link>
      </Box>
    </Flex>
  );
};

export default BlogsSuggestedCategory;
