/** @format */

// IMPORT CHAKRA UI RELATED
import { Box } from "@chakra-ui/react";

// IMPORT RELATED TO JSON FILE
import { ContactData } from "../../../json/ContactData";

// IMPORT RELATED TO COMPONENTS
import ContactInformationComponents from "./ContactInformationComponents";

const ContactInformationDIsplayComponents = () => {
  return (
    <Box>
      {ContactData.Contact.map((contact) => {
        const { id, title, description, data } = contact;

        return (
          <Box key={id}>
            <ContactInformationComponents
              title={title}
              description={description}
              data={data}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default ContactInformationDIsplayComponents;
