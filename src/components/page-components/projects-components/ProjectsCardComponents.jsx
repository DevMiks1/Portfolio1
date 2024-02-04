/** @format */

// IMPORT CHAKRA UI RELATED
import { Box, Flex, Heading, Img, Link, Text } from "@chakra-ui/react";

const ProjectsCardComponents = ({
  image,
  alt,
  projectpath,
  deployment,
  deploymentalt,
  repositoryalt,
  repository,
  repositorypath,
  frontend,
  backend,
  styles,
  programming,
  name,
  description,
}) => {
  return (
    <Box h="100%" w="100%">
      <Box h="45%">
        <Img src={image} alt={alt} h="100%" w="100%" />
      </Box>
      <Box p={3} h="55%">
        <Flex flexDir="column" justify="space-between" h="100%">
          <Heading as="h3" fontSize="20px" fontWeight="semibold">
            {name}
          </Heading>

          <Box>
            <Text>{description}</Text>
          </Box>

          <Flex justify="space-between">
            <Flex gap={2}>
              <Text color="#FF6347">{frontend}</Text>
              <Text color="#0099aa">{styles}</Text>
              <Text color={programming ? "#F7DF1E" : backend ? "#3FA037" : ""}>
                {programming || backend}
              </Text>
            </Flex>
            <Flex gap={2}>
              <Link isExternal href={projectpath}>
                <Img
                  src={deployment}
                  alt={deploymentalt}
                  h="30px"
                  w="30px"
                  rounded="100%"
                  cursor="pointer"
                />
              </Link>
              <Link href={repositorypath} isExternal>
                <Img
                  src={repository}
                  alt={repositoryalt}
                  h="30px"
                  w="30px"
                  rounded="100%"
                  cursor="pointer"
                />
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProjectsCardComponents;
