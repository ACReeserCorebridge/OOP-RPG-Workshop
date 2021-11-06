import { Box, Heading, Image, Progress, VStack } from '@chakra-ui/react';
import React from 'react';

export const Dragon: React.FC<{
  hp: number;
}> = (props) => {
  const hpColor = props.hp <= 20 ? 'red' : props.hp < 60 ? 'yellow' : 'green'
  return (
    <Box>
      <Heading size="sm">BOSS DRAGON</Heading>
      <Progress 
      value={props.hp}
      colorScheme={hpColor}  />
      
      <Box>
        <Image boxSize="700px" src="/assets/dragon.png" objectFit="contain" alt="Dragon" />
      </Box>
    </Box>
  );
};
