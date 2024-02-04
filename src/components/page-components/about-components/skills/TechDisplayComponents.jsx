/** @format */

// IMPORT CHAKRA UI RELATED
import { Box, Container, Flex, Heading } from "@chakra-ui/react";

// IMPORT RELATED TO COMPONENTS
import BoxChoicesDisplayComponents from "./choices-skills/BoxChoicesDisplayComponents";
import SkillsDisplayComponents from "./selected-skills/SkillsDisplayComponents";

const TechDisplayComponents = ({ skillsTab, handleSkillsTab }) => {
  return (
    <Box as="section" id="tech" pt={20} fontFamily="poppins">
      <Container maxW="container.xl" h="100%">
        <Flex
          flexDir={{ base: "column", md: "row" }}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center" }}
          h="100%"
        >
          <Flex flexDir="column" width="100%">
            <Heading
              as="h2"
              h={{ base: "100%" }}
              pb={{ base: 5, md: 0 }}
              data-aos="zoom-in-up"
              data-aos-duration="800"
            >
              Technical Proficiency
            </Heading>

            <Flex
              flexDir={{ base: "column-reverse", md: "row" }}
              justify="center"
              align="center"
              h={{ base: "100%", md: "70vh" }}
            >
              {/* BOX CHOICES FOR SKILLS */}
              <Flex
                data-aos="zoom-in-up"
                data-aos-duration="800"
                flexDir="column"
                w={{ base: "100%", sm: "100%", lg: "50%" }}
              >
                <BoxChoicesDisplayComponents
                  skillsTab={skillsTab}
                  handleSkillsTab={handleSkillsTab}
                />
              </Flex>

              {/* SKILLS SELECT DISPLAY*/}
              <Flex
                data-aos="zoom-in-up"
                data-aos-duration="800"
                border="3px solid #3182ce"
                rounded={10}
                w={{ base: "100%", lg: "50%" }}
                p={5}
                mb={10}
              >
                <Flex w="100%" align="center" justify="center">
                  <SkillsDisplayComponents skillsTab={skillsTab} />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default TechDisplayComponents;
