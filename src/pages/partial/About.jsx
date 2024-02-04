/** @format */

// IMPORT RELATED TO REACT
import { useState } from "react";

// IMPORT CHAKRA UI RELATED
import { Box, Container, Heading } from "@chakra-ui/react";

// IMPORT CREATE CONTEXT RELATED / THIS IS FOR LOADING SCREEN
import { useLoading } from "../../components/context/LoadingContext";

// LOADING SCREEN COMPONENTS
import LoadingScreenComponents from "../../components/loading-screen/LoadingScreenComponents";

// IMPORT RELATED TO ABOUT WHICH 3 COMPONENTS

// ABOUT ME DISPLAY COMPONENTS
import AboutMeDisplayComponents from "../../components/page-components/about-components/about-me/AboutMeDisplayComponents";

// TECHDISPLAY OR SKILL DISPLAY COMPONENTS
import TechDisplayComponents from "../../components/page-components/about-components/skills/TechDisplayComponents";

// TESTIMONIAL DISPLAY COMPONENTS
import TestimonialDisplayComponents from "../../components/page-components/about-components/testimonial/TestimonialDisplayComponents";

export const About = () => {
  const { loading } = useLoading();
  const [skillsTab, setSkillsTab] = useState("frontend");

  // HANDLE TO IDENTIFY WHICH IS THE ACTUAL TAB THIS IS THE A STRING
  const handleSkillsTab = (skills) => {
    setSkillsTab(skills);
  };

  return (
    <>
      {loading ? (
        <LoadingScreenComponents />
      ) : (
        <Box as="section" fontFamily="poppins">
          <Container maxW="container.xl" py={20}>
            {/* ABOUT ME */}
            <AboutMeDisplayComponents />

            {/* SKILLS  */}
            <TechDisplayComponents
              skillsTab={skillsTab}
              handleSkillsTab={handleSkillsTab}
            />

            {/* TESTIMONIAL */}
            <Box pt={16}>
              <Heading as="h2" fontSize="28px" pb={10} data-aos="zoom-in">
                TESTIMONIALS
              </Heading>

              {/* TESTIMONIAL DISPLAY COMPONENTS */}
              <Box>
                <TestimonialDisplayComponents />
              </Box>
            </Box>
          </Container>
        </Box>
      )}
    </>
  );
};
