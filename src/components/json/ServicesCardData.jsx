/** @format */

// IMPORT SERVICE IMAGES
import carpainting from "../../assets/services/car-painting.jpg";
import cartinsmith from "../../assets/services/car-tinsmith.png";
import webdevelopment from "../../assets/services/web-development-services.png";

export const ServicesCardData = {
  Services: [
    {
      id: 1,
      title: "Car Painting",
      description:
        "We specialize in delivering top-quality car painting services that will transform the look of your vehicle. Whether you want to restore the original shine or give your car a fresh, vibrant color, with our skilled and experienced technicians, we have the services to make it happen.",
      button: "Discover",
      image: carpainting,
      pageNumber: 1,
      alt: "Painting a car Photo",
      path: "/services",
    },
    {
      id: 2,
      title: "Car Tinsmith",
      description:
        "From scratches to more extensive repairs, we specialize in working with various types of sheet metal, including steel, aluminum, and more. We meticulously shape, weld, and repair the damaged areas, seamlessly blending them with the original structure of your car.",
      button: "Discover",
      image: cartinsmith,
      pageNumber: 2,
      alt: "Tinsmith Photo",
      path: "/services",
    },
    {
      id: 3,
      title: "Web Development",
      description:
        "We understand that every project is unique, and we tailor our services to meet your specific needs. Whether you're starting from scratch or looking to revamp your existing website, our experienced developers will collaborate with you to understand your goals.",

      button: "Discover",
      image: webdevelopment,
      pageNumber: 3,
      alt: "Webdevelopments Photo",
      path: "/services",
    },
  ],
};
