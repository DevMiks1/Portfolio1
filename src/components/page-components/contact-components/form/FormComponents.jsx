/** @format */

// IMPORT CHAKRA UI RELATED
import {
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";

const FormComponents = ({
  register,
  errorMessagesVisible,
  errors,
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
}) => {
  return (
    <>
      <FormControl h="90px">
        <FormLabel htmlFor="name" mt={5} color="black">
          {label}
        </FormLabel>

        {isMessage ? (
          <Textarea
            _hover={{ border: "2px solid secondary.500 " }}
            resize="none"
            color="black"
            borderColor="secondary.500"
            type="text"
            placeholder={holder}
            {...register(registered, {
              required: true,
              ...(isHaveMaxLength ? { maxLength: 100 } : {}),
              ...(isHavePattern
                ? { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i }
                : {}),
            })}
          ></Textarea>
        ) : (
          <Input
            _hover={{ border: "2px solid secondary.500 " }}
            borderColor="secondary.500"
            color="black"
            type="text"
            placeholder={holder}
            {...register(registered, {
              required: true,
              ...(isHaveMaxLength ? { maxLength: 100 } : {}),
              ...(isHavePattern
                ? { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i }
                : {}),
            })}
          />
        )}
        {errors[registered] && errorMessagesVisible && (
          <Text color="red.600">
            {errors[registered].type === required && errorRequired}
            {errors[registered].type === pattern && errorpattern}
          </Text>
        )}
      </FormControl>
    </>
  );
};

export default FormComponents;
