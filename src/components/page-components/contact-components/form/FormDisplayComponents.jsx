/** @format */

// IMPORT CHAKRA UI RELATED

import { Box, Button } from "@chakra-ui/react";

// IMPORT RELATED TO JSON FILE
import { FormData } from "../../../json/FormData";

// IMPORT RELATED TO COMPONENTS
import FormComponents from "./FormComponents";

const FormDisplayComponents = ({
  onSubmit,
  register,
  errorMessagesVisible,
  errors,
}) => {
  return (
    <Box>
      <form
        action="https://formsubmit.co/d9199cd83bc9f38640ce6ba1b3800c93"
        method="post"
        onSubmit={onSubmit}
      >
        {FormData.Form.map((form) => {
          const {
            id,
            label,
            registered,
            required,
            pattern,
            errorRequired,
            errorpattern,
            isHaveMaxLength,
            isHavePattern,
            holder,
            isMessage,
          } = form;
          return (
            <Box key={id}>
              <FormComponents
                onSubmit={onSubmit}
                register={register}
                errorMessagesVisible={errorMessagesVisible}
                errors={errors}
                label={label}
                registered={registered}
                required={required}
                pattern={pattern}
                errorRequired={errorRequired}
                errorpattern={errorpattern}
                isHavePattern={isHavePattern}
                isHaveMaxLength={isHaveMaxLength}
                holder={holder}
                isMessage={isMessage}
              />
            </Box>
          );
        })}
        <Box pt={14}>
          <Button
            type="submit"
            border="2px solid"
            borderColor="secondary.500"
            color="black"
          >
            SEND MESSAGE
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default FormDisplayComponents;
