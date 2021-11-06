import { Container, Flex, Text, VStack } from "@chakra-ui/layout";
import React from "react";

export const LogUI: React.FC<{
    log: string[]
}> = (props) => {
    return <Flex mt={14} w="100vw" alignItems="center" justifyContent="center">
        <VStack>
            <Text>☞ {props.log[0]}</Text>
            <Text>{props.log[1]}</Text>
            <Text>{props.log[2]}</Text>
            <Text>{props.log[3]}</Text>
        </VStack>
    </Flex>
}