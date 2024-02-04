/** @format */

// IMPORT CHAKRA UI RELATED
import { Box, Flex, Img } from "@chakra-ui/react";

// IMPORT RELATED TO IMAGES
import profile from "../../../../assets/home/profile.png";
import react from "../../../../assets/skills/react.png";

// IMPORT RELATED TO JSON FILE
import { SkillsCardsData } from "../../../json/SkillsCardsData";

// IMPORT RELATED TO COMPONENTS
import SkillCardsComponents from "./SkillCardsComponents";

const IntroductionImageComponents = () => {
  return (
    <>
      <Flex flexDir="column" px={2}>
        <Flex pb={5} gap={5}>
          <Flex flexDir="column" justify={{ base: "end" }}>
            <SkillCardsComponents image={react} alt="react logo" />
          </Flex>

          {/* PROFILE IMAGE */}
          <Box pr={{ base: "0", lg: "20" }}>
            <Img
              h={{ base: "230px", md: "270px", lg: "300px" }}
              w={{ base: "230px", md: "270px", lg: "300px" }}
              rounded={20}
              src={profile}
              alt="Profile Image"
            />
          </Box>
        </Flex>

        <Flex
          gap={5}
          w="100%"
          align={{ base: "self-start" }}
          justify={{ base: "center" }}
        >
          {SkillsCardsData.Skills.map((skill) => {
            const { id, image, alt } = skill;
            return (
              <Box key={id}>
                <SkillCardsComponents image={image} alt={alt} />
              </Box>
            );
          })}
        </Flex>
      </Flex>
    </>
  );
};

export default IntroductionImageComponents;
