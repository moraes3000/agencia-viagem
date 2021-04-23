import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            // '900': '#353646'
        }
    },
    fonts: {
        body: "'Poppins', sans- serif"
    },

    styles: {
        global: {
            body: {
                bg: 'gray.900',
                color: 'gray.50'
            }
        }
    }
})