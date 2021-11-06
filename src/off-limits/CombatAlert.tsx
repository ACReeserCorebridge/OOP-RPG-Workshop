import React, { useEffect, useRef } from "react"
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogCloseButton,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
    ModalProps,
    Text,
    useDisclosure,
    useToast
} from "@chakra-ui/react"

interface CombatAlertProps {
    message: string;
    isVictory: boolean;
}
export function CombatAlert({ message, isVictory }: CombatAlertProps) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef(null)
    const toast = useToast();

    useEffect(() => {
        onOpen();
        // toast({
        //     title: <Text size="3xl" casing="uppercase">{isVictory ? "VICTORY" : "GAME OVER"}</Text>,
        //     description: message,
        //     position: "top",
        //     status: isVictory ? "success" : "error",
        //     duration: null,
        //     isClosable: true
        // })
    }, []);

    return (
        <>
            <AlertDialog
                motionPreset="scale"
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent bg={isVictory ? "green.500" : "red.500"} >
                    <AlertDialogHeader>
                        <Text size="3xl" casing="uppercase">{isVictory ? "VICTORY" : "GAME OVER"}</Text>
                    </AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                        {message}
                    </AlertDialogBody>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}