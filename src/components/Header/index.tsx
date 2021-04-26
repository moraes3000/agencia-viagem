import { Box, Center, Link } from "@chakra-ui/react"
export default function Header() {
  return (
    <Box >
      <Link href='/'>
        <Center h="100px">
          <img src="Logo.svg" alt="Logo" />
        </Center>
      </Link>
    </Box>
  )
}