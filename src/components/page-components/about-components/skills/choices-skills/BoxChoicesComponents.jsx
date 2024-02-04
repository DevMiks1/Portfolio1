/** @format */

// IMPORT CHAKRA UI RELATED
import { Box, Flex, Text } from "@chakra-ui/react";

const BoxChoicesComponents = ({
  skillsTab,
  handleSkillsTab,
  icon,
  name,
  selectedSkills,
}) => {
  return (
    <>
      <Flex
        justify="center"
        align="center"
        w="35%"
        py={5}
        pos="relative"
        border="1px solid #3182ce"
        rounded={5}
        cursor="pointer"
        background={skillsTab === selectedSkills ? "secondary.500" : ""}
        onClick={() => handleSkillsTab(selectedSkills)}
      >
        <Text>{name}</Text>
        <Box
          zIndex={2}
          pos="absolute"
          fontSize="26px"
          left="-17px"
          top="-17px"
          border="1px solid #3182ce"
          bg="primary.800"
          py={1}
          px={1}
          rounded={5}
          color="secondary.500"
          overflow="hidden"
        >
          {icon}
        </Box>
      </Flex>
    </>
  );
};

export default BoxChoicesComponents;
