import { FC } from "react"
import {
  Button,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"

const Connected: FC = () =>{
    return(
        <VStack>
            <Container>
                <VStack>
                    <Heading
                    color="white"
                    as="h1"
                    size="2xl"
                    noOfLines={1}
                    textAlign="center"
                    >
                        Welcome Buildoor.
                    </Heading>
                    <Text color="bodytext" fontSize="xl" textAlign="center">
                    Each buildoor is randomly generated and can be staked to receive
                        <Text as="b"> $BLD</Text> Use your <Text as="b"> $BLD</Text> to
                        upgrade your buildoor and receive perks within the community!
                    </Text>
                </VStack>
            </Container>
            <HStack>
                <Image borderRadius='3xl'boxSize={80} objectFit='cover'
                src="benjaminred.png" alt="" />
                <Image borderRadius='3xl'boxSize={80} objectFit='cover' 
                src="dentistahmad.png" alt="" />
                <Image borderRadius='3xl'boxSize={80} objectFit='cover' 
                src="itsjustme.png" alt="" />
                <Image borderRadius='3xl'boxSize={80} objectFit='cover' 
                src="lightiningkaan.png" alt="" />
                <Image borderRadius='3xl'boxSize={80} objectFit='cover' 
                src="sharpkurshot.png" alt="" />
            </HStack>
            <Button bgColor="accent" color="white" maxW="380px">
                <HStack>
                    <Text>mint buildoor</Text>
                    <ArrowForwardIcon/>
                </HStack>
            </Button>
        </VStack>
    )
}

export default Connected