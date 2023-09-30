
import { Box, Button, Container, Spacer, Stack, Text, Center } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box p={8} bg="white">
      <Center>
      <Box bg="teal" p="6rem" width="400px" height="400px" borderRadius="24px" >
        <Text as="Heading" color="white" fontSize="32px">25 + 5 Clock</Text>
        <Stack direction="row" py="2rem">
          <Container bg="greenyellow" p="3rem">
            <Text color="teal">Break Length</Text>
            <Stack direction="row" spacing={6}>
              <Button size="sm">Down</Button>
              <Text>5</Text>
              <Button size="sm">Up</Button>
            </Stack>
          </Container>
          <Spacer /> 
          <Container bg="aqua" p="3rem">
            <Text color="teal">Session Length</Text>
            <Stack direction="row" spacing={6}>
              <Button size="sm">Down</Button>
              <Text>25</Text>
              <Button size="sm">Up</Button>
            </Stack>
          </Container>
        </Stack>
        <Center>
        <Box width="350px" boxShadow="2xl" bg="white" borderRadius="10px" borderColor="white" border="2px" py="1rem">
          <Center>
            <Text color="whatsapp.700" fontSize="32px">Session</Text>
            <Text fontSize="45px" color="whatsapp.700">25:00</Text>
          </Center>
          
        </Box>
        </Center>
        
      </Box>
      </Center> 
      
    </Box>
  )
}
