
import { VStack, Heading, Text, Box, Flex, Center, Square, Grid, GridItem, Spacer, Image } from '@chakra-ui/react'
import { Container } from 'next/app'
import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import ListItem from '../components/ListCidade/Index'
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
                <Heading fontSize="3rem" color='#F5F8FA' mt='8  rem' mb='1rem'>Europa</Heading>
            </VStack>


            <Center mt='6rem'>
                <Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)']} gap={2} w='960px' textAlign='justify' justifyContent='center' p={6}>
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

            <Center mt='6rem' p={6}>
                <Grid templateColumns="1fr" gap={2} w='960px'>
                    <GridItem >
                        <Heading fontSize="3rem" color='#47585B' my={8}>Cidades +100</Heading>
                    </GridItem>
                </Grid>
            </Center>
            <Center>
                <Grid  templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)', 'repeat(4, 1fr)']} gap={8} w='960px' mb={8}>
                    <ListItem city='Londes' country='Reino Unido' banner='londres.png' imaCountry='uk.png' />
                    <ListItem city='Paris' country='França' banner='paris.png' imaCountry='uk.png' />
                    <ListItem city='Roma' country='Italia' banner='roma.png' imaCountry='italy.png' />
                    <ListItem city='Praga' country='Republica Tcheca' banner='praga.png' imaCountry='rt.png' />
                    <ListItem city='Amsterdã' country='Holanda' banner='amster.png' imaCountry='holanda.png' />
                </Grid>
            </Center>



        </>
    )
}
