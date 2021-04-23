import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        highlight: {
            '900': '#ffba08'
        },
        preto: {
            '500': '#47585b'
        },
        gray: {
            '950':'#ff0'
        }

    },
    fonts: {
        body: "'Poppins', sans- serif"
    },

    styles: {
        global: {
            body: {
                bg: 'f5f8fa',
                color: '47585B'
            }
        }
    }
})