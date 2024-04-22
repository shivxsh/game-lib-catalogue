import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames"
import { HStack, Icon } from "@chakra-ui/react"
import { IconType } from "react-icons";

interface Props{
    platforms: Platform[];
}

const PlatformIconList = ({platforms} : Props) => {

    //Key value pair for names to icons
    // { [key: string] : IconType } to tell compiler that the type of the keys is string and the type of its values is 'IconType'
    // The syntax is given inside a square bracket and is called "Index Annotation"
    const iconMap : { [key:string] : IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        linux: FaLinux,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid

    }

  return (
    <HStack marginY={1}>  // {1} is 4px in Chakra
        {platforms.map( (platform) => (
            <Icon as={iconMap[platform.slug]}  color='gray.500' />
        ))}
    </HStack>
  )
}

export default PlatformIconList
