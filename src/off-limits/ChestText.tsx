import React from "react";
import { Box, Image } from '@chakra-ui/react'

export const ChestText: React.FC = () => {
  return (
    <Box> 
      <Image boxSize="100px" src="/assets/chest.png" objectFit="cover" alt="Chest" />
    </Box>
  );
};