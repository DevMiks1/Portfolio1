/** @format */

// IMPORT CHAKRA UI RELATED
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Flex,
} from "@chakra-ui/react";

// IMPORT RELATED TO JSON FILE
import { NavBarData } from "../json/NavBarData";

// IMPORT RELATED TO COMPONENTS
import NavBarListComponents from "./NavBarListComponents";

const MobileNavBar = ({ isOpen, onClose, handleActive, active }) => {
  return (
    <>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            color="red.500"
            _hover={{
              color: "red.600",
            }}
          />

          <DrawerBody>
            <Flex
              flexDir="column"
              gap={10}
              align="center"
              justify="center"
              h="100%"
              fontWeight="semibold"
              fontSize="18px"
              px={20}
            >
              {NavBarData.NavbarMobile.map((mobileNavbar) => {
                const { id, name, icon, path, isMobile } = mobileNavbar;
                return (
                  <Flex justify="center" key={id}>
                    <NavBarListComponents
                      name={name}
                      icon={icon}
                      path={path}
                      isMobile={isMobile}
                      handleActive={handleActive}
                      active={active}
                      onClose={onClose}
                    />
                  </Flex>
                );
              })}

              <Box
                bg="secondary.500"
                py={2}
                px={3}
                rounded={5}
                _hover={{
                  bg: "blue.400",
                  cursor: "pointer",
                  color: "white",
                }}
              >
                <a href="*">Hire Me</a>
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNavBar;
