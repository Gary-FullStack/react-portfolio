import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import avatar from "../images/avatar.jpg";

console.log(avatar);

const greeting = "Hello, I am Gary!";
const bio1 = "A FullStack developer";
const bio2 = "specialised in React";


const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={16}>
    <VStack spacing={4}>
    <Avatar src={avatar} size="1xl"/>
        <Heading size="md" >{greeting}</Heading>
      </VStack>
      <VStack spacing={6}>
        <Heading>{bio1}</Heading>
        <Heading>{bio2}</Heading>
      </VStack>  
    </VStack>

  </FullScreenSection>
);


export default LandingSection;
