"use client"
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ExerciseCard from '@/components/ExerciseCard';
import { Flex, Section } from '@radix-ui/themes'
import ProgramHeader from '@/components/ProgramHeader';
import styled from 'styled-components'; // Using styled-components for styling


const StickySection = styled.section`
  position: sticky;
  top: 0;
  z-index: 1000; // High z-index to ensure it's on top of other content
  background: inherit; // Optional: Match the background to your theme
  margin: 0 auto; // Center the section horizontally
  align: center
  width: 100%; // Apply default width for small screens

  @media (min-width: 520px) { // Adjust for phones in landscape
    width: 100%;
  }

  @media (min-width: 768px) { // Adjust for tablets in portrait
    width: 40%; // You can adjust this width based on your layout needs
  }

  @media (min-width: 1024px) { // Adjust for tablets in landscape
    width: 40%; // Adjust this as necessary
  }

  @media (min-width: 1280px) { // Adjust for laptops
    width: 40%; // Adjust this as necessary
  }

  @media (min-width: 1640px) { // Adjust for desktops
    width: 40%; // This is typically narrower to align with the centered layout
  }
`;

const StaticSection = styled.section`
  position: fixed;
  bottom: 0;
  z-index: 1000; // High z-index to ensure it's on top of other content
  width: 50%; // Ensure full width
  background: inherit; // Optional: Match the background to your theme
  margin: 0 auto; // Center the section horizontally
  align: center
  justify-content: center;
`;


const ProgramPage = () => {
    return (
      <>
      <StickySection >
        <ProgramHeader />
      </StickySection>
      <Flex justify="center" direction={"column"} align={"center"}>
        <ExerciseCard />
        <ExerciseCard />
        <ExerciseCard />
        <ExerciseCard />
        <ExerciseCard />
        <ExerciseCard />
      </Flex>
      <Navbar />
      </>
    );
  };
  
  export default ProgramPage;