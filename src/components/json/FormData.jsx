/** @format */

export const FormData = {
  Form: [
    {
      id: 1,
      label: "Name:",
      registered: "name",
      required: "required",
      pattern: "maxLength",
      errorRequired: "This field is required.",
      errorpattern: "Max Length is required.",
      holder: "Your name goes here!",
      maxLength: 100,
      isMessage: false,
      isHaveMaxLegth: true,
      isHavePattern: false
    },
    {
      id: 2,
      label: "Email:",
      registered: "email",
      required: "required",
      pattern: "pattern",
      errorRequired: "This field is required.",
      errorpattern: "Invalid email address.",
      holder: "Your email goes here!",
      isMessage: false,
      isHaveMaxLegth: false,
      isHavePattern: true
    },
    {
      id: 3,
      label: "Message:",
      registered: "message",
      required: "required",
      pattern: "maxLength",
      errorRequired: "This field is required.",
      errorpattern: "Max Length is 2000 char.",
      holder: "Your message goes here!",
      isMessage: true,
      isHaveMaxLegth: false,
      isHavePattern: false
    },
  ],
};
