import { Container, Flex, Text, VStack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";

export const LogUI: React.FC<{
    log: string[]
}> = (props) => {

    const toast = useToast();

    useEffect(() => {
        toast({
            title: <Text size="xl">{props.log[0]}</Text>,
            position: "bottom",
            status: "info",
            duration: 2500,
            variant: "left-accent"
        })
    }, [props.log]);
    
    return <></>
}