import { Heading, Text, Box, Flex, GridItem, Spacer, Image } from '@chakra-ui/react'

interface ListProps {
    city: string;
    country: string;
    imaCountry: string;
    banner: string;

}
export default function ListItem({ city, country, imaCountry, banner }: ListProps) {
    return (

        <GridItem p={5}>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" >
                <Image src={banner} w='100%' />
                <Flex>
                    <Box p="4">
                        <Heading fontSize="1.5rem" color='#47585B' mt=''  >
                            {city}
                        </Heading>
                        <Text color='#999999' mt={4}>{country}</Text>
                    </Box>
                    <Spacer />
                    <Box p="4">
                        <Image boxSize="30px" borderRadius="full" mt={4} src={imaCountry} />
                    </Box>
                </Flex>
            </Box>
        </GridItem>

    )
}