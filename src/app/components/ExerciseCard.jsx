import React from 'react';
import { Container, Flex, Text, Badge, Separator } from '@radix-ui/themes'
import ExerciseSet from '@/components/ExerciseSet'
import { Ellipsis, ListChecks } from "lucide-react";

const ExerciseCard = () => {
  return (
    <Flex justify="center" align="center" height="100%" width={{ initial: '100%', xs: '100%', sm: '40%', md: '40%', lg:'40%', xl:'40%' }} >
      <Container style={{ background: 'var(--gray-a2)', }} my={{ sm: '1', lg: '2' }}>
        <Flex direction="column">
          {/* Heading */}
          <Flex p="2" justify="between" width={'100%'}>
            <Badge color="red" variant="outline">Muscle Group</Badge>
            <Ellipsis size="28" color="gray" />
          </Flex>
          <Flex p="2" justify="between" width={'100%'}>
            <Flex direction="column">
              <Text size="5">Exercise Name</Text>
              <Text size="1" color="gray">Core or Assistance</Text>
            </Flex>
            <ListChecks size="24" color="gray" />
          </Flex>
          {/* Logging */}

          <Flex p="2" direction="column" width={'100%'}> 
            <Flex p="2" justify="between" width={'100%'}>
              <Text size="2" color="gray">Set</Text>
              <Text size="2" color="gray">Reps</Text>
              <Text size="2" color="gray">RPE</Text>
              <Text size="2" color="gray">Log</Text>
            </Flex>
            {/* Rest of the sets here: Seperator, Set */}
            <ExerciseSet set="1" weight="10" rpe="10" />
            <ExerciseSet set="2" weight="10" rpe="9" />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default ExerciseCard;