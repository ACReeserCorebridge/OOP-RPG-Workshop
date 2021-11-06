import React from "react";
import { AppState } from "..";
import { Dragon } from "./Dragon";
import { ICharacter } from "./ICharacter";
import { LogUI } from "./LogUI";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Td,
    Image,
    Text,
    Center,
    Flex,
    HStack,
    Stack,
    VStack,
    Tooltip
} from "@chakra-ui/react"
import { Progress } from "@chakra-ui/react"
import { CombatAlert } from "./CombatAlert";

export const CombatUI: React.FC<{
    state: AppState;
}> = (props) => {
    return (
        <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
            <VStack>
                <HStack>

                    <Table className="grid">
                        <Thead>
                            <Tr>
                                <Td>50ft</Td>
                                <Td>45</Td>
                                <Td>40</Td>
                                <Td>35</Td>
                                <Td>30</Td>
                                <Td>25</Td>
                                <Td>20</Td>
                                <Td>15</Td>
                                <Td>10</Td>
                                <Td>5ft</Td>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {props.state.characters.map((char, i) => (
                                <CharacterRow
                                    key={i}
                                    charPos={char.position}
                                    character={char}
                                ></CharacterRow>
                            ))}
                        </Tbody>
                    </Table>
                    <Dragon hp={props.state.dragonHP} />
                    {props.state.characters.every((x) => x.health < 1) ? (
                        <CombatAlert message="You have been defeated!" isVictory={false} />
                    ) : null}
                    {props.state.dragonHP <= 0 ? (
                        <CombatAlert message="You have defeated the dragon!" isVictory={true} />
                    ) : null}
                </HStack>
                <LogUI log={props.state.log}></LogUI>
            </VStack>

        </Flex>
    );
};

export const CharacterRow: React.FC<{
    character: ICharacter;
    charPos: number;
}> = (props) => {
    const cols: Array<{ c?: ICharacter }> = [];
    for (var i = 10; i > 0; i--) {
        if (i === props.charPos) {
            cols.push({ c: props.character });
        } else {
            cols.push({});
        }
    }
    return (
        <Tr>
            {cols.map((c, i) => {
                return (
                    <Td key={i}>
                        {c.c ? (
                            <CharacterCombatUI
                                character={props.character}
                            ></CharacterCombatUI>
                        ) : null}
                    </Td>
                );
            })}
        </Tr>
    );
};

export const CharacterCombatUI: React.FC<{
    character: ICharacter;
}> = (props) => {

    const hpClass = props.character.health <= 1 ? 'red' : props.character.health < 5 ? 'yellow' : 'green'
    const damageVariant = props.character.health <= 1 ? 'damage' : props.character.health < 5 ? 'warning' : 'healthy'

    return (
        <Center>
            <Tooltip variant={damageVariant}
                label={`${props.character.health} HP`}
                placement="top" >
                <Stack>
                    <Progress
                        value={props.character.health}
                        max={props.character.health > 5 ? props.character.health : 5}
                        colorScheme={hpClass} />
                    <Image src={props.character.getASCIIStatus()} alt="" style={{ maxWidth: "3rem" }} />
                    <Text>{props.character.name}</Text>
                </Stack>
            </Tooltip>
        </Center>

    );
};