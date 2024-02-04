/** @format */

// IMPORT CHAKRA UI RELATED
import { Box, Flex } from "@chakra-ui/react";

// IMPORT RELATED TO JSON FILE
import { SubFooterData } from "../json/SubFooterData";

// IMPORT RELATED TO COMPONENTS
import SubFooterComponents from "./SubFooterComponents";

const SubFooterDisplayComponents = () => {
  return (
    <Flex gap={3}>
      {SubFooterData.SubFooter.map((subFoot) => {
        const { id, socialpath, icon } = subFoot;
        return (
          <Box key={id} fontSize="20px">
            <SubFooterComponents socialpath={socialpath} icon={icon} />
          </Box>
        );
      })}
    </Flex>
  );
};

export default SubFooterDisplayComponents;
