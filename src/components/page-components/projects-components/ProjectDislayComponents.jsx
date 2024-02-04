/** @format */

// IMPORT CHAKRA UI RELATED
import { Box, Flex } from "@chakra-ui/react";

// IMPORT RELATED TO JSON FILE
import { ProjectsCardData } from "../../json/ProjectsCardData";

// IMPORT RELATED TO COMPONENTS
import ProjectsCardComponents from "./ProjectsCardComponents";

const ProjectDislayComponents = () => {
  return (
    <Flex
      flexDir={{ sm: "column", md: "row" }}
      h="100%"
      flexWrap="wrap"
      justify={{ sm: "center ", lg: "space-between" }}
      align="center"
      columnGap={{ md: 7, lg: 0 }}
      rowGap={7}
    >
      {ProjectsCardData.Projects.map((proj) => {
        const {
          id,
          image,
          alt,
          projectpath,
          deployment,
          repository,
          deploymentalt,
          repositoryalt,
          repositorypath,
          frontend,
          backend,
          styles,
          programming,
          name,
          description,
        } = proj;
        return (
          <Box
            key={id}
            width={{ base: "100%", sm: "70%", md: "40%", lg: "30%" }}
            maxWidth="100%"
            border="1px solid white"
            h="450px"
            data-aos="fade-up"
            data-aos-duration="700"
            style={{ boxShadow: "0 0 15px -5px rgba(0, 0, 0, 0.5)" }}
          >
            <ProjectsCardComponents
              image={image}
              alt={alt}
              projectpath={projectpath}
              deployment={deployment}
              deploymentalt={deploymentalt}
              repositoryalt={repositoryalt}
              repository={repository}
              repositorypath={repositorypath}
              frontend={frontend}
              backend={backend}
              styles={styles}
              programming={programming}
              name={name}
              description={description}
            />
          </Box>
        );
      })}
    </Flex>
  );
};

export default ProjectDislayComponents;
