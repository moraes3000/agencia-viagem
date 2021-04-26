
import { VStack, Heading, Text, Box, Flex, Center, Square, Grid, GridItem } from '@chakra-ui/layout'
import { Container } from 'next/app'
import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Travel from '../components/Travel'
export default function Home() {
    return (
        <>
            <Header />
            <VStack
                backgroundImage="url('banner2.jpg')"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                h="335px">
                <Heading fontSize="3rem" color='#F5F8FA' mt='6rem' mb='1rem'>Europa</Heading>
            </VStack>


            <Center mt='6rem'>
                <Grid templateColumns="repeat(2, 1fr)" gap={2} w='960px' textAlign='justify' justifyContent='center'>
                    <GridItem >
                        <Text>A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste</Text>
                    </GridItem>

                    <GridItem >
                        <Grid templateColumns="repeat(3, 1fr)" ml={8} gap={2} mt={3} textAlign='center' justifyContent='center'>
                            <GridItem >
                                <img src="paises.png" />
                            </GridItem>
                            <GridItem >
                                <img src="linguas.png" />
                            </GridItem>
                            <GridItem >
                                <img src="cidades.png" />
                            </GridItem>
                        </Grid>
                    </GridItem>
                </Grid>
            </Center>


            
        </>
    )
}
