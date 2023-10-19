import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Menu } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Bruschetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive.",
    getImageSrc: () => require("../images/bruschetta.jpg"),
  },
  {
    title: "Greak Salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    getImageSrc: () => require("../images/greekSalad.jpg"),
  },
  {
    title: "Lemon Dessert",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    getImageSrc: () => require("../images/lemonDessert.jpg"),
  },
  {
    title: "Penne Arabiata",
    description:
      "Our pasta is made fresh in-house daily and our pasta sauce is made from locally sourced tomatoes.",
    getImageSrc: () => require("../images/penne3.jpg"),
  },
];

const Menupage = () => {
  return (
    <FullScreenSection
      backgroundColor="#EEEFEE"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading color="black" as="h1" id="menupage-section">
        Menu
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default Menupage;
