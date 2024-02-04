/** @format */

// IMPORT FROM ROUTES
import AllRoutes from "./routes/AllRoutes";

// CHAKRA UI
import { Flex } from "@chakra-ui/react";

// IMPORT FROM COMPONENTS
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";

const App = () => {
  return (
    <>
      <Flex flexDir="column" minH="100vh">
        <NavBar />
        <AllRoutes />
        <ScrollToTop />
        <Flex mt="auto">
          <Footer />
        </Flex>
      </Flex>
    </>
  );
};

export default App;
