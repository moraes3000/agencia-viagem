import { Heading, VStack, Text, Link } from "@chakra-ui/layout";

interface CarouselProps {
    banner: string;
    title: string;
    description: string;
}

export default function Carousel({ banner, title, description }: CarouselProps) {
    return (
        <>
            <Link href='/europa'>
                <VStack
                    // backgroundImage="url('banner3.jpg')"
                    backgroundImage={`url(${banner})`}
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    h="335px">
                    <Heading fontSize="3rem" color='#F5F8FA' mt='6rem' mb='1rem'>{title}</Heading>
                    <Text fontSize="1.5rem" color='#DADADA' >{description} </Text>
                </VStack>
            </Link>
        </>
    )
}