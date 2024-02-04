/** @format */

// IMPORT RELATED TO REACT
import { useState } from "react";

// IMPORT CHAKRA UI RELATED
import { Box, Container, Flex, Heading } from "@chakra-ui/react";

// IMPORT CREATE CONTEXT RELATED / THIS IS FOR LOADING SCREEN
import { useLoading } from "../../components/context/LoadingContext";

// LOADING SCREEN COMPONENTS
import LoadingScreenComponents from "../../components/loading-screen/LoadingScreenComponents";

// IMPORT RELATED TO REACT HOOK FORM
import { useForm } from "react-hook-form";

// IMPORT RELATED TO CONTACT WHICH 2 COMPONENTS

// IMPORT FORM DISPLAY WHICH IN THE LEFT SIDE
import FormDisplayComponents from "../../components/page-components/contact-components/form/FormDisplayComponents";

// IMPORT THE CONTACT INFORMATION DISPLAY WHICH IN THE RIGHT SIDE
import ContactInformationDIsplayComponents from "../../components/page-components/contact-components/contact-information/ContactInformationDIsplayComponents";

// IMPORT CUSTOM CSS
import "../contact.css";

export const Contact = () => {
  const { loading } = useLoading();
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const [errorMessagesVisible, setErrorMessagesVisible] = useState(false);

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
      setErrorMessagesVisible(true);
      setTimeout(() => {
        setErrorMessagesVisible(false);
      }, 2000);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingScreenComponents />
      ) : (
        <Flex
          as="section"
          w="100%"
          h={{ base: "100%", md: "100vh" }}
          justify="center"
          align="center"
          pt={20}
          pb={{ base: 10, md: 0 }}
        >
          <Container maxW="container.lg" mx="auto">
            <Flex flexDir={{ base: "column", md: "row" }} justify="center">
              {/* FORM DISPLAY FROM THE LEFT SIDE */}
              <Box
                w={{ base: "100%", md: "60%" }}
                order={{ base: 2, md: 1 }}
                bg="gray.200"
                p={5}
                borderTopLeftRadius="lg"
                borderBottomLeftRadius="lg"
              >
                <Heading as="h2" color="secondary.500">
                  Get in touch
                </Heading>

                <FormDisplayComponents
                  onSubmit={onSubmit}
                  register={register}
                  errorMessagesVisible={errorMessagesVisible}
                  errors={errors}
                />
              </Box>

              {/* CONTACT INFORMATION FROM RIGHT SIDE */}
              <Box
                w={{ base: "100%", md: "40%" }}
                order={{ base: 1, md: 2 }}
                id="contact"
                p={8}
                color="white"
                borderTopRightRadius="lg"
                borderBottomRightRadius="lg"
              >
                <ContactInformationDIsplayComponents />
              </Box>
            </Flex>
          </Container>
        </Flex>
      )}
    </>
  );
};
