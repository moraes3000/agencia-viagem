import { Box, Center, Divider, Grid, GridItem, Heading, Text } from "@chakra-ui/react"
export default function Travel() {
    return (
        <>
            <Center mt='6rem'>
                <Grid templateColumns="repeat(5, 1fr)" gap={2} w='960px' textAlign='center' justifyContent='center'>
                    <GridItem >
                        <img src="Nightlife.svg" alt="Logo" />
                    </GridItem>
                    <GridItem >
                        <img src="Beach.svg" alt="Logo" />
                    </GridItem>
                    <GridItem >
                        <img src="Modern.svg" alt="Logo" />
                    </GridItem>
                    <GridItem >
                        <img src="Classic.svg" alt="Logo" />
                    </GridItem>
                    <GridItem >
                        <img src="More.svg" alt="Logo" />
                    </GridItem>
                </Grid>


            </Center>
            <Center mt='3rem'>
                <Divider w='200px' h='7px' colorScheme='#47585B' />
            </Center>
            <Center mt='3rem'>
                <Text fontSize="3rem" color='#47585B' textAlign='center'>
                    Vamos nessa?<br/>Então escolha seu continente
                </Text>
            </Center>

        </>
    )
}