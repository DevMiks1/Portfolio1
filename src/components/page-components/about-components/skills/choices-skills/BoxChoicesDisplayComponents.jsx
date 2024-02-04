/** @format */

// IMPORT CHAKRA UI RELATED
import { Flex } from "@chakra-ui/react";

// IMPORT RELATED TO REACT ICONS
import { FaDatabase, FaWrench, FaUsers, FaCode } from "react-icons/fa";

// IMPORT RELATED TO COMPONENTS
import BoxChoicesComponents from "./BoxChoicesComponents";

const BoxChoicesDisplayComponents = ({ skillsTab, handleSkillsTab }) => {
  return (
    <>
      <Flex w="100%" justify="center" gap={10} pb={10}>
        {/* FRONTEND */}
        <BoxChoicesComponents
          skillsTab={skillsTab}
          handleSkillsTab={handleSkillsTab}
          icon={<FaCode />}
          name="Frontend"
          selectedSkills="frontend"
        />
        {/* BACKEND */}
        <BoxChoicesComponents
          skillsTab={skillsTab}
          handleSkillsTab={handleSkillsTab}
          icon={<FaDatabase />}
          name="Database"
          selectedSkills="backend"
        />
      </Flex>

      <Flex w="100%" justify="center" gap={10} pb={10}>
        {/* TOOLS */}
        <BoxChoicesComponents
          skillsTab={skillsTab}
          handleSkillsTab={handleSkillsTab}
          icon={<FaWrench />}
          name="Tools"
          selectedSkills="tools"
        />

        {/* SOFT SKILLS */}
        <BoxChoicesComponents
          skillsTab={skillsTab}
          handleSkillsTab={handleSkillsTab}
          icon={<FaUsers />}
          name="Soft Skills"
          selectedSkills="softskills"
        />
      </Flex>
    </>
  );
};

export default BoxChoicesDisplayComponents;
