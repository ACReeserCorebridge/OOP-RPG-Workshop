import React, { useEffect } from "react"
import {
    Text,
    useToast
} from "@chakra-ui/react"

interface CombatAlertProps {
    message: string;
    isVictory: boolean;
}
export function CombatAlert({ message, isVictory }: CombatAlertProps) {

    const toast = useToast();

    useEffect(() => {
        toast({
            title: <Text size="3xl" casing="uppercase">{isVictory ? "VICTORY" : "GAME OVER"}</Text>,
            description: message,
            position: "top",
            status: isVictory ? "success" : "error",
            duration: null,
            isClosable: true
        })
    }, []);

    return (
        <>
        </>
    )
}