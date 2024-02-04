/** @format */

// IMPORT CHAKRA UI RELATED
import { Box, Container, Flex, Heading } from "@chakra-ui/react";

// IMPORT CREATE CONTEXT RELATED / THIS IS FOR LOADING SCREEN
import { useLoading } from "../../components/context/LoadingContext";

// LOADING SCREEN COMPONENTS
import LoadingScreenComponents from "../../components/loading-screen/LoadingScreenComponents";

// COMPONENTS FOR INTRODUCTION OR HERO SECTION
import IntroductionImageComponents from "../../components/page-components/home-components/introduction/IntroductionImageComponents";
import IntroductionComponents from "../../components/page-components/home-components/introduction/IntroductionComponents";

// COMPONENTS FOR JOURNEY
import JourneyImageComponents from "../../components/page-components/home-components/journey/JourneyImageComponents";
import JourneyDescriptionComponents from "../../components/page-components/home-components/journey/JourneyDescriptionComponents";

// COMPONENTS FOR THE DISPLAY OF THE SERVICE CARDS
import ServiceCardsDisplayComponents from "../../components/page-components/home-components/ServiceCardsDisplayComponents";

export const Home = () => {
  const { loading } = useLoading();

  return (
    <>
      {loading ? (
        <LoadingScreenComponents />
      ) : (
        <Box as="section" fontFamily="poppins">
          <Container maxW="container.xl" mx="auto" h="100%">
            {/* INTRODUCTION  */}
            <Box
              as="section"
              id="home"
              h="100vh"
              pt={{ base: "5rem" }}
              fontFamily="poppins"
            >
              <Flex
                flexDir={{ base: "column", md: "row" }}
                justify={{ base: "center", md: "space-between" }}
                align={{ base: "center" }}
                h="100%"
              >
                {/* LEFT SIDE */}
                <IntroductionComponents />

                {/* RIGHT SIDE */}
                <IntroductionImageComponents />
              </Flex>
            </Box>

            {/* JOURNEY  */}
            <Box>
              <Flex
                flexDir={{ base: "column", md: "row" }}
                justify="center"
                align="center"
                py={20}
                gap={5}
              >
                {/* IMAGE */}
                <JourneyImageComponents />

                {/* DESCRIPTION OF JOURNEY */}
                <JourneyDescriptionComponents />
              </Flex>
            </Box>

            {/* WE OFFER   */}
            <Box>
              <Box pb="10rem">
                {/* TITLE */}
                <Box textAlign="center" data-aos="zoom-in" pb={10}>
                  <Heading as="h4" fontSize="20px">
                    What we Offer
                  </Heading>
                  <Heading as="h2" fontSize="20px">
                    Save Your Money To Our Services
                  </Heading>
                </Box>

                {/* CARD */}
                <Flex w="100%" justify="center" gap={5} data-aos="zoom-in">
                  {/* SERVICES CARD  */}
                  <ServiceCardsDisplayComponents />
                </Flex>
              </Box>
            </Box>
          </Container>
        </Box>
      )}
    </>
  );
};
