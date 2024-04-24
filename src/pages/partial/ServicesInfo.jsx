/** @format */

// IMPORT RELATED TO REACT
import React from "react";
import { useParams } from "react-router-dom";

// IMPORT CHAKRA UI RELATED
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

// IMPORT CREATE CONTEXT RELATED / THIS IS FOR LOADING SCREEN
import { useLoading } from "../../components/context/LoadingContext";

// LOADING SCREEN COMPONENTS
import LoadingScreenComponents from "../../components/loading-screen/LoadingScreenComponents";

// IMPORT RELATED TO JSON FILE
import { ServicesData } from "../../components/json/ServicesData";

// IMPORT RELATED TO COMPONENTS
import ServicesOfferDisplayComponents from "../../components/page-components/services-components/services-description/services-offer/ServicesOfferDisplayComponents";
import ServicesInfoDisplayComponents from "../../components/page-components/services-components/services-description/services-info/ServicesInfoDisplayComponents";

export const ServicesInfo = () => {
  const { loading } = useLoading();
  const { itemNumber } = useParams();

  const currentItem = ServicesData.ServicesOffer.find(
    (services) => services.itemNumber === Number(itemNumber)
  );

  if (!currentItem) {
    // Handle case when currentItem is not found
    return (
      <Flex
        as="section"
        flexDir="column"
        justify="center"
        align="center"
        minH="100vh"
      >
        <Heading as="h2" fontSize="30px" fontWeight="bold">
        Item Not Found!!
      </Heading>
      </Flex>
    );
  }

  return (
    <>
      {loading ? (
        <LoadingScreenComponents />
      ) : (
        <Box as="section">
          <Container maxW="container.xl" mx="auto" py={40}>
            <Heading as="h2" fontSize="28px" pb={10}>
              {currentItem.title}
            </Heading>

            <Flex flexDir={{ base: "column", md: "row" }} gap={5}>
              <Box w={{ sm: "100%", md: "55%", lg: "65%" }}>
                <ServicesInfoDisplayComponents currentItem={currentItem} />
              </Box>

              <Box
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
