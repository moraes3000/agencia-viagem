
import { VStack, Heading, Text, Box, Flex, Center, Square, Grid, GridItem, Spacer, Image } from '@chakra-ui/react'
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



            <Heading fontSize="3rem" color='#47585B' my={8}>Cidades +100</Heading>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" >
                <img src='banner1.jpg' />
                <Flex>
                    <Box p="4">
                        <Heading fontSize="1.5rem" color='#47585B' mt=''  >
                            Londres
                </Heading>
                        <Text color='#999999' mt={4}>Reino Unido </Text>
                    </Box>
                    <Spacer />
                    <Box p="4">
                        <Image boxSize="30px" borderRadius="full" mt={4} src='banner1.jpg' />
                    </Box>
                </Flex>
            </Box>
            


        </>
    )
}
