/** @format */

// IMPORT CHAKRA UI RELATED
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const ContactInformationComponents = ({ title, description, data }) => {
  return (
    <Box>
      <Heading as="h2" textAlign="center" fontSize="2xl" mb={4}>
        {title}
      </Heading>
      <Text>{description}</Text>

      <Box pt={20}>
        {data.map((el) => {
          const { id, icon, info } = el;
          return (
            <Flex key={id} gap={5} pb={5}>
              {icon}
              <Text>{info}</Text>
            </Flex>
          );
        })}
      </Box>
    </Box>
  );
};

export default ContactInformationComponents;
