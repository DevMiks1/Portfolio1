/** @format */

// // IMPORT CHAKRA UI RELATED
import { Box, Img } from "@chakra-ui/react";

// IMPORT RELATED TO IMAGES
import Journey from "../../../../assets/home/journey.png";

const JourneyImageComponents = () => {
  return (
    <>
      <Box
        data-aos="zoom-in-up"
        data-aos-duration="800"
        w={{ base: "100%", md: "50%" }}
      >
        <Img src={Journey} alt="journey" />
      </Box>
    </>
  );
};

export default JourneyImageComponents;
