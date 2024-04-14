import React, { useState } from 'react';
import styled from 'styled-components';
import { ChevronDown } from "lucide-react";
import { Text, Flex } from '@radix-ui/themes';

const ProgramHeader = styled.header`
  cursor: pointer;
  overflow: hidden; // Prevent content from overflowing during transition
  transition: height 0.3s ease; // Smooth height transition
  max-height: ${props => props.isExpanded ? '1000px' : '80px'}; // Adjust max-height to your needs
`;

const ProgramPage = () => {
  const [isExpanded, setIsExpanded] = useState(false); // Track expansion state

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded); // Toggle the expansion state on click
  };

  return (
    <ProgramHeader isExpanded={isExpanded} onClick={toggleExpansion} style={{ background: 'var(--gray-a2)',}} >
      <Flex justify='between' p="5" my="-2">
        <Flex direction="column">
            <Text size="1" color="gray">PROGRAM NAME</Text>
            <Text size="3" color="green">Strengthening Phase</Text>
            <Text size="1" color="gray" weight="light">Week 2 - Monday</Text>
        </Flex>
        <ChevronDown size="32" color="gray" />
      </Flex>
      {isExpanded && (
        <div>
          <p>More details about the program...</p>
          <p>More details about the program...</p>
          <p>More details about the program...</p>
          {/* Include more detailed information here */}
        </div>
      )}
    </ProgramHeader>
    // Other components
  );
};

export default ProgramPage;
