/** @format */

// CHAKRA UI
import { Box, Flex, Link, Text } from "@chakra-ui/react";

// IMPORT RELATED TO JSON FILE
import { NavBarData } from "../json/NavBarData";

// IMPORT RELATED TO COMPONENTS
import NavBarListComponents from "./NavBarListComponents";

const RightNavBarComponents = ({
  handleActive,
  active,
  setActive,
  setLoading,
}) => {
  return (
    <Box>
      <Flex
        gap={5}
        align="center"
        display={{ base: "none", md: "none", lg: "flex" }}
      >
        <Flex gap={12}>
          {NavBarData.NavbarDesktop.map((navbar) => {
            const { id, name, path } = navbar;
            return (
              <Box key={id}>
                <NavBarListComponents
                  name={name}
                  path={path}
                  handleActive={handleActive}
                  active={active}
                  setActive={setActive}
                  setLoading={setLoading}
                />
              </Box>
            );
          })}
        </Flex>

        <Box
          bg="secondary.500"
          py={2}
          px={3}
          rounded={5}
          _hover={{
            bg: "blue.400",
            cursor: "pointer",
          }}
        >
          <Link
            _hover={{ textDecor: "none" }}
            href="https://drive.google.com/uc?export=download&id=1TqRdC5AoQvVFnoq_xTOSM7wpvqlVVB7Z"
            isExternal
          >
            <Text >Hire Me</Text>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default RightNavBarComponents;
