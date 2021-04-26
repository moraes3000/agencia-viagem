import { Box, Center, Divider, Grid, GridItem, Heading, Text, VStack } from "@chakra-ui/react"
// Import Swiper React components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
export default function Travel() {
    return (
        <>
            <Center mt='6rem'>
                <Grid templateColumns={['repeat(2, 1fr)','repeat(3, 1fr)','repeat(5, 1fr)']} p={6} gap={2} w='960px' textAlign='center' justifyContent='center'>
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
                    Vamos nessa?<br />Então escolha seu continente
                </Text>
            </Center>

            {/* <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >

                <SwiperSlide>
                    <VStack
                        backgroundImage="url('banner1.jpg')"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        h="335px">

                        <Heading fontSize="3rem" color='#F5F8FA' mt='7rem' mb='1rem'>Europa</Heading>
                        <Text fontSize="1.5rem" color='#DADADA' >O continente mais antigo </Text>
                    </VStack>
                </SwiperSlide>

                <SwiperSlide>
                    <VStack
                        backgroundImage="url('banner3.jpg')"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        h="335px">

                        <Heading fontSize="3rem" color='#F5F8FA' mt='7rem' mb='1rem'>Europa</Heading>
                        <Text fontSize="1.5rem" color='#DADADA' >O continente mais antigo </Text>
                    </VStack>
                </SwiperSlide>

            </Swiper> */}


            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >

                {/* <SwiperSlide><img src='banner1.jpg' /></SwiperSlide>
                <SwiperSlide><img src='banner2.jpg' /></SwiperSlide>
                <SwiperSlide><img src='banner3.jpg' /></SwiperSlide>
                <SwiperSlide><img src='banner4.jpg' /></SwiperSlide> */}
                <SwiperSlide>

                    <VStack
                        backgroundImage="url('banner1.jpg')"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        h="335px">
                        <Heading fontSize="3rem" color='#F5F8FA' mt='6rem' mb='1rem'>Europa</Heading>
                        <Text fontSize="1.5rem" color='#DADADA' >O Continnente mais antigo </Text>
                    </VStack>

                </SwiperSlide>

                <SwiperSlide>

                    <VStack
                        backgroundImage="url('banner2.jpg')"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        h="335px">
                        <Heading fontSize="3rem" color='#F5F8FA' mt='6rem' mb='1rem'>Europa</Heading>
                        <Text fontSize="1.5rem" color='#DADADA' >O Continnente mais antigo </Text>
                    </VStack>

                </SwiperSlide>

                <SwiperSlide>

                    <VStack
                        backgroundImage="url('banner3.jpg')"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        h="335px">
                        <Heading fontSize="3rem" color='#F5F8FA' mt='6rem' mb='1rem'>Europa</Heading>
                        <Text fontSize="1.5rem" color='#DADADA' >O Continnente mais antigo </Text>
                    </VStack>

                </SwiperSlide>
            </Swiper>

        </>
    )
}