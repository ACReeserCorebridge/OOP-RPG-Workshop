import React, { useEffect } from "react";
import { AppState } from "..";
import { Button, Flex, Heading, Spacer } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { Badge } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
import { HStack, VStack } from "@chakra-ui/react"
import { HeroBadge } from "./HeroBadge";

export const MenuUI: React.FC<{
    state: AppState;
    start: () => void;
}> = (props) => {
    useEffect(() => {
        const tID = setTimeout(() => {
            props.start();
        }, 12000);
        return () => clearTimeout(tID)
    })
    return (
        <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
            <Container maxW="container.xl" centerContent>
                <VStack spacing={16}>
                    <VStack spacing={8}>
                        <Heading size="lg">
                            OOP RPG
                        </Heading>
                        <Heading size="xl" color="red.400">
                            BOSS DRAGON
                        </Heading>
                        <Text size="lg">
                            Once upon a time, four heroes banded together to defeat BOSS
                            DRAGON. They were:
                        </Text>
                    </VStack>
                    <HStack spacing={8} >
                        {props.state.characters.map((x, i) => (
                            <HeroBadge avatar={x.avatar} 
                            heroClass={x.classname()}
                            name={x.name} 
                            key={i} />
                        ))}
                    </HStack>
                    <Button onClick={() => props.start()}>BEGIN GAME</Button>
                </VStack>
            </Container>
        </Flex>
    );
};