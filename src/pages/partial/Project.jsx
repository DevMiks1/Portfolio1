/** @format */

// IMPORT CHAKRA UI RELATED
import { Box, Container, Heading } from "@chakra-ui/react";

// IMPORT CREATE CONTEXT RELATED / THIS IS FOR LOADING SCREEN
import { useLoading } from "../../components/context/LoadingContext";

// LOADING SCREEN COMPONENTS
import LoadingScreenComponents from "../../components/loading-screen/LoadingScreenComponents";

// IMPORT PROJECT DISPLAY COMPONENTS
import ProjectDislayComponents from "../../components/page-components/projects-components/ProjectDislayComponents";

export const Project = () => {
  const { loading } = useLoading();
  return (
    <>
      {loading ? (
        <LoadingScreenComponents />
      ) : (
        <Box as="section" fontFamily="poppins">
          <Container maxW="container.xl" mx="auto" py={40}>
            <Heading
              as="h2"
              fontSize="30px"
              fontWeight="bold"
              textAlign="center"
              pb={10}
            >
              My Projects
            </Heading>
            <Box>
              <ProjectDislayComponents />
            </Box>
          </Container>
        </Box>
      )}
    </>
  );
};
