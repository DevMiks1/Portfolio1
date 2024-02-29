/** @format */

import { Avatar, Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useLoading } from "../../../context/LoadingContext";

const BlogsCategory1 = ({
  img,
  alt,
  profile,
  name,
  date,
  title,
  url,
  description,
}) => {
  const { setLoadingState } = useLoading();
  const handleClick = () => {
    setLoadingState(true);
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoadingState(false);
    }, 2000);
  };
  return (
    <Flex flexDir="column" h="100%">
      <Img src={img} alt={alt} h={{ base: "100%", md: 200 }} />
      <Box pr={10}>
        <Flex gap={5} color="gray.300" fontSize="14px" align="center" py={5}>
          <Avatar src={profile} size="sm" />
          <Flex flexDir="column">
            <Text>{name}</Text>
            <Text>{date}</Text>
          </Flex>
        </Flex>

        <Flex flexDir="column" justify="space-between" h="230px">
          <Link to={`/blogs/${url}`}>
            <Text
              onClick={handleClick}
              fontSize="24px"
              fontWeight="semibold"
              _hover={{
                color: "gray.300",
                transition: "0.3s",
                textDecor: "none",
              }}
            >
              {title}
            </Text>
          </Link>
          <Box noOfLines={5}>{description}</Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default BlogsCategory1;
