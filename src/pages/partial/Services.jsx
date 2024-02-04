/** @format */

// IMPORT CHAKRA UI RELATED
import { Box, Container, Flex, Heading } from "@chakra-ui/react";

// IMPORT CREATE CONTEXT RELATED / THIS IS FOR LOADING SCREEN
import { useLoading } from "../../components/context/LoadingContext";

// LOADING SCREEN COMPONENTS
import LoadingScreenComponents from "../../components/loading-screen/LoadingScreenComponents";

// IMPORT SERVICES DESCRIPTION DISPLAY COMPONENTS
import ServicesDescriptionDisplayComponents from "../../components/page-components/services-components/services-description/ServicesDescriptionDisplayComponents";

// IMPORT SERVICES OFFER DISPLAY COMPONENTS
import ServicesOfferDisplayComponents from "../../components/page-components/services-components/services-description/services-offer/ServicesOfferDisplayComponents";

export const Services = () => {
  const { loading } = useLoading();
  return (
    <>
      {loading ? (
        <LoadingScreenComponents />
      ) : (
        <Box as="section" fontFamily="fontpoppins">
          <Container maxW="container.xl" mx="auto" py={40}>
            <Heading as="h2" fontSize="28px" pb={10}>
              Save your money to our services
            </Heading>

            <Flex flexDir={{ base: "column", md: "row" }} gap={5}>
              {/* SERVICES DESCRIPTION DISPLAY COMPONENTS */}
              <Box
                w={{ sm: "100%", md: "55%", lg: "65%" }}
                data-aos="zoom-in-up"
                data-aos-duration="800"
              >
                <ServicesDescriptionDisplayComponents />
              </Box>

              {/* SERVICES OFFER DISPLAY COMPONENTS */}
              <Box
                data-aos="zoom-in-up"
                data-aos-duration="800"
                w={{ md: "45%", lg: "35%" }}
                border="1px solid white"
                px={5}
                py={7}
                h="100%"
              >
                <ServicesOfferDisplayComponents />
              </Box>
            </Flex>
          </Container>
        </Box>
      )}
    </>
  );
};
