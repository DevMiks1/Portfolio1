/** @format */

// IMPORT RELATED TO REACT ICONS
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export const ContactData = {
  Contact: [
    {
      id: 1,
      title: "Contact Information",
      description:
        "Let's connect and discuss important matters, or if you're interested in collaborating. Whether it's a question, project inquiry, or just saying hello, feel free to reach out!",
      data: [
        { id: 1, icon: <FaPhone />, info: "(+63) 919 724 7687" },
        { id: 2, icon: <FaEnvelope />, info: "mikealfredvargas@gmail.com" },
        { id: 3, icon: <FaMapMarkerAlt />, info: "Rodriguez, Rizal" },
      ],
    },
  ],
};
