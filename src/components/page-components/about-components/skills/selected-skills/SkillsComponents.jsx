/** @format */

// IMPORT CHAKRA UI RELATED
import { Flex, Text, Img } from "@chakra-ui/react";

const SkillsComponents = ({ src, alt, name, type }) => {
  return (
    <Flex flexDir="column" justify="center" align="center" gap={3}>
      {type === "image" ? (
        <>
          <Img h="50px" src={src} alt={alt} />
          <Text>{name}</Text>
        </>
      ) : (
        <>
          <Text fontSize="24px">{src}</Text>
          <Text>{name}</Text>
        </>
      )}
    </Flex>
  );
};

export default SkillsComponents;
