import { Box, Heading, Image, Progress, Tooltip, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';

export const Dragon: React.FC<{
  hp: number;
}> = (props) => {

  const [damageTaken, setDamageTaken] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const previousHp = usePrevious(props.hp);

  function usePrevious(value: number) {
    const ref = useRef<number>();
    useEffect(() => {
      ref.current = value;
    }, [props.hp]);
    return ref.current;
  }

  useEffect(() => {
    if (previousHp) {
      console.log(previousHp);
      const damage = previousHp - props.hp;
      if (damage > 0) {
        setDamageTaken(damage);
        onOpen();
      }
    }
  }, [props.hp]);

  const hpColor = props.hp <= 20 ? 'red' : props.hp < 60 ? 'yellow' : 'green'
  const hpVariant = props.hp <= 20 ? 'damage' : props.hp < 60 ? 'warning' : 'healthy'
  return (
    <Box>
      <Tooltip variant={hpVariant}
        label={`${props.hp} HP`}
        placement="top-start">
        <Box>
          <Heading size="md">BOSS DRAGON</Heading>
          <Progress hasStripe isAnimated
            value={props.hp < 0 ? 0 : props.hp}
            colorScheme={hpColor} />
        </Box>
      </Tooltip>
      <Box>
        <Tooltip
          variant="damage"
          label={`Took [ ${damageTaken} ] of damage`}
          openDelay={200}
          closeDelay={50}
          onClose={onClose}
          isOpen={isOpen}>
         <Image
            boxSize="auto"
            src="/assets/dragon.png"
            objectFit="contain"
            alt="Dragon" />
        </Tooltip>
      </Box>
    </Box>
  );
};
