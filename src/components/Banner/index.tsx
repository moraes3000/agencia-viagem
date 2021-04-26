import { Box, Center, Container, Flex, Text, Spacer, SimpleGrid, Heading, Grid, Square, VStack ,Image } from "@chakra-ui/react"

export default function Banner() {
    return (
        <>
            <VStack
                backgroundImage="url('Background-2.png')"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                h="335px">


                <Container maxW="container.lg" color='white'>
                    <Flex>
                        <Box p={['0.5rem','2rem']} pr='5rem'>
                            <Heading fontSize={['1.5rem','3rem']} color='#F5F8FA'mt='2rem' mb='1rem'>5 Continentes,infinitas possibilidades.</Heading>
                            <Text fontSize="['0.5rem,'1.5rem']" color='#DADADA' >Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
                        </Box>
                    
                        <Box mt='9rem' display={['none','none','block']}>
                            <img src='Airplane.svg' alt='Avião' />
                        </Box>
                    </Flex>



                </Container>

            </VStack>
        </>

    )
}