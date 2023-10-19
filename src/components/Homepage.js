import React from "react";
import { Avatar, HStack, Heading, VStack, Text, ChakraProvider, Spacer } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const Homepage = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#495F58"
    id="homepage-section"
  >
    <HStack>
    <VStack>
      <Text as={"b"} fontSize={"7xl"} color={"#F4CD16"} fontFamily={"Markazi"}>Little Lemon</Text>
      <Text as={"b"} fontSize={"5xl"} color={"#ECEFED"} fontFamily={"Markazi"}>Chicago</Text>
      <Text w={900} fontSize={"3xl"} color={"#ECEFED"} fontFamily={"Markazi"}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</Text>
    </VStack>
    <img src='https://andrewdole.com/static/media/SmallPlates_small.827fb0bfe6f625329f41' style={{ borderRadius: "8%", marginTop: "100px"}}/>
    </HStack>
  </FullScreenSection>
);

export default Homepage;
