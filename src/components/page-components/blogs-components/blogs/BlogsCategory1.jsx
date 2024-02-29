/** @format */

import { Avatar, Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

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
  return (
    <Flex flexDir="column" h="100%">
      <Img src={img} alt={alt} h={200} />
      <Box pr={10}>
        <Flex gap={5} color="gray.300" fontSize="14px" align="center" py={5}>
          <Avatar src={profile} size="sm" />
          <Flex flexDir="column">
            <Text>{name}</Text>
            <Text>{date}</Text>
          </Flex>
        </Flex>

        <Flex flexDir="column" justify="space-between" h="200px">
          <Link to={`/blogs/${url}`}>
            <Text fontSize="24px" fontWeight="semibold">
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
