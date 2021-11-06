import React, { useEffect, useState } from "react";
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
    Tooltip,
    TableProps,
    CenterProps
} from "@chakra-ui/react"
import { Progress } from "@chakra-ui/react"
import { CombatAlert } from "./CombatAlert";
import { motion, useAnimation } from "framer-motion";
import { CombatPhase } from "./Game";

export interface CharacterRowProps {
    character: ICharacter;
    charPos: number;
    state: AppState;
}
export interface CharacterCombatUIProps {
    character: ICharacter;
    state: AppState;
}

export const MotionCharacterRow = motion<CharacterRowProps>(CharacterRow);

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
                                <MotionCharacterRow
                                    key={i}
                                    charPos={char.position}
                                    character={char}
                                    state={props.state}
                                ></MotionCharacterRow>
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

export function CharacterRow({
    character,
    charPos,
    state
}: CharacterRowProps) {
    const cols: Array<{ c?: ICharacter }> = [];
    for (var i = 10; i > 0; i--) {
        if (i === charPos) {
            cols.push({ c: character });
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
                            <motion.div layout>
                                <CharacterCombatUI
                                    character={character}
                                    state={state}
                                ></CharacterCombatUI>
                            </motion.div>
                        ) : null}
                    </Td>
                );
            })}
        </Tr>
    );
};


export const MotionCenter = motion<CenterProps>(Center);

export function CharacterCombatUI({ character, state }: CharacterCombatUIProps) {

    const hpClass = character.health <= 1 ? 'red' : character.health < 5 ? 'yellow' : 'green'
    const damageVariant = character.health <= 1 ? 'damage' : character.health < 5 ? 'warning' : 'healthy'
    const controls = useAnimation()

    useEffect(() => {
        const currentChar = state.characters[state.currentCharacter]
        if (state.currentCombatPhase === CombatPhase.attack 
            && character.name === currentChar.name) {
            controls.start({
                x: [0, 100, 0],
                transition: { duration: 1 },
            })
        }
        else {
            controls.stop();
        }
    }, [state.currentCharacter, state.currentCombatPhase, character.name]);

    return (
        <MotionCenter layout={true} animate={controls}>
            <Tooltip variant={damageVariant}
                label={`${character.health} HP`}
                placement="top" >
                <Stack>
                    <Progress
                        value={character.health}
                        max={character.health > 5 ? character.health : 5}
                        colorScheme={hpClass} />
                    <Image src={character.getASCIIStatus()} alt="" style={{ maxWidth: "3rem" }} />
                    <Text>{character.name}</Text>
                </Stack>
            </Tooltip>
        </MotionCenter>
    );
};