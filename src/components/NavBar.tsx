import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='60px' margin= '5px'/>
        <Text>Sheeesh</Text>
    </HStack>
  )
}

export default NavBar
