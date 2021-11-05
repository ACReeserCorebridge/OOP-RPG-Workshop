import { Box, Flex, Text, Badge, Avatar } from "@chakra-ui/react";
import React from "react";

export interface AvatarProps {
    avatar: string;
    name: string;
    heroClass: string
}

export function HeroBadge({ avatar, name, heroClass }: AvatarProps) {
    return (
        <Box
            maxW="sm"
            overflow="hidden"
            padding="4">
            <Flex>
                <Avatar src={avatar} />
                <Box>
                    <Text fontWeight="bold">
                        {name}
                    </Text >
                    <Badge ml="1" colorScheme="green">
                        THE {heroClass}
                    </Badge>
                </Box>
            </Flex>

        </Box>
    )
}