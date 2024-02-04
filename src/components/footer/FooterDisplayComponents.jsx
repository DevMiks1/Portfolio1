/** @format */

// IMPORT CHAKRA UI RELATED
import { Box, Flex } from "@chakra-ui/react";

// IMPORT RELATED TO JSON FILE
import { FooterData } from "../json/FooterData";

// IMPORT RELATED TO COMPONENTS
import FooterComponents from "./FooterComponents";

const FooterDisplayComponents = () => {
  return (
    <Flex
      flexDir={{ sm: "column", md: "row" }}
      w="100%"
      h="100%"
      flexWrap="wrap"
      justify={{ sm: "center", lg: "space-between" }}
      align="center"
      columnGap={{ sm: 4, md: 7, lg: 10 }} // Adjust these values based on your design
      rowGap={7}
    >
      {FooterData.Footer.map((foot) => {
        const { id, title, data } = foot;
        return (
          <Box key={id} width={{ base: "100%", md: "40%", lg: "30%" }}>
            <FooterComponents title={title} data={data} />
          </Box>
        );
      })}
    </Flex>
  );
};

export default FooterDisplayComponents;
