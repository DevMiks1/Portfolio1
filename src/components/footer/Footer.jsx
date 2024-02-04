/** @format */

// IMPORT CHAKRA UI RELATED
import { Box, Container, Flex } from "@chakra-ui/react";

// IMPORT RELATED TO COMPONENTS
import FooterDisplayComponents from "./FooterDisplayComponents";
import SubFooter from "./SubFooter";

const Footer = () => {
  return (
    <Box as="footer" w="100%" bg="primary.700" color="white">
      <Container maxW="container.xl" mx="auto" >
        {/* MAIN FOOTER */}
        <Flex py={5}>
          <FooterDisplayComponents />
        </Flex>

        {/* SUB FOOTER OR THE ICONS */}
        <Box >
          <SubFooter />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
