import { Box, Button, Flex, Heading, HStack, VStack, Text, Image, Center } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { AppState } from "..";
import { ChestText } from "./ChestText";
import { HeroBadge } from "./HeroBadge";
import { LogUI } from "./LogUI";
import { ScaleFade } from "@chakra-ui/react"

export const LootUI: React.FC<{
    state: AppState;
    start: () => void;
    loot: (index: number) => void;
}> = (props) => {
    useEffect(() => {
        const tID = setInterval(() => {
            for (let i = 0; i < props.state.chests.length; i++) {
                const chest = props.state.chests[i];
                if (chest.opened) {
                    continue;
                } else {
                    props.loot(i);
                    return;
                }
            }
            props.start();
        }, 3000);
        return () => clearInterval(tID)
    });
    const anyClosed = props.state.chests.some(x => !x.opened);
    return (
        <>
            <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">

                <VStack spacing={16}>
                    <Heading size="md" >Your party finds 4 treasure chests</Heading>
                    <HStack spacing={8}>
                        {props.state.characters.map((x, i) => (
                            <Box key={i}>
                                <Center>
                                    <HeroBadge name={x.name} avatar={x.avatar} heroClass={x.classname()} />
                                    {
                                        props.state.chests[i].opened ?
                                            props.state.chests[i].item.image ?
                                                <ScaleFade initialScale={0.9} in={props.state.chests[i].opened}>
                                                    <Box maxW="sm" overflow="hidden">
                                                        <Box alignItems="center">
                                                            <Image boxSize="100px" src={props.state.chests[i].item.image}></Image>
                                                            <Box letterSpacing="wide"
                                                                display="flex"
                                                                alignItems="baseline"
                                                                color="gray.200"
                                                                fontWeight="semibold"
                                                                mt="4">
                                                                {props.state.chests[i].item.name}
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </ScaleFade>
                                                : <Text> {props.state.chests[i].item.name}</Text >
                                            :
                                            <VStack >
                                                <ChestText></ChestText>
                                                <Button onClick={() => props.loot(i)} className="smaller">
                                                    LOOT
                                                </Button>
                                            </VStack>
                                    }
                                </Center>
                            </Box>
                        ))}
                    </HStack>
                    <Button onClick={() => props.start()} disabled={anyClosed}>
                        ASSAULT BOSS DRAGON
                    </Button>
                    <LogUI log={props.state.log}></LogUI>
                </VStack>
            </Flex>
        </>
    );
};