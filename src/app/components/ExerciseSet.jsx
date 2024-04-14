import React from 'react';
import { Flex, Text, Separator, Button } from '@radix-ui/themes'
import ScrollableSelect from '@/components/ScrollableSelect'

const ExerciseSet = ({ set, weight, rpe}) => {
  return (
    <Flex direction="column">
    {/* Rest of the sets here: Seperator, Set */}
        <Separator orientation="horizontal" size="4" />
        <Flex justify="between" >
            <Flex>
                <Text size="4" >{set} </Text>
            </Flex>
            <Flex>
                <ScrollableSelect item={weight} items={[1.5, 2, 2.5]} />
            </Flex>
            <Flex>
                <ScrollableSelect item={rpe} items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
            </Flex>
            <Flex>
                <Button variant="solid" size="2" >Log Set</Button>
            </Flex>
        </Flex>
    </Flex>
  );
};

export default ExerciseSet;