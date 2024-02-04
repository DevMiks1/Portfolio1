/** @format */

// IMPORT CHAKRA UI RELATED
import { Box, Flex, Icon, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

// IMPORT RELATED TO COMPONENTS
import MobileNavBar from "./MobileNavBar";

const BurgerComponents = ({ handleActive, active }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Flex
        fontSize="24px"
        _hover={{
          cursor: "pointer",
        }}
      >
        {/* BURGER ICON */}
        <Icon onClick={onOpen} as={HamburgerIcon} />

        {/* MOBILE NAVBAR */}
        <MobileNavBar
          isOpen={isOpen}
          onClose={onClose}
          handleActive={handleActive}
          active={active}
        />
      </Flex>
    </Box>
  );
};

export default BurgerComponents;
