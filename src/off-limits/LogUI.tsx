import { Container, Text } from "@chakra-ui/layout";
import React from "react";

export const LogUI: React.FC<{
    log: string[]
}> = (props) => {
    return <Container>
        <Text>☞ {props.log[0]}</Text>
        <Text>{props.log[1]}</Text>
        <Text>{props.log[2]}</Text>
        <Text>{props.log[3]}</Text>
    </Container>
}