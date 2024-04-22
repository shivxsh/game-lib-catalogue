import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";


interface Props{
    game: Game;
}

const GameCard = ({game} : Props) => {

  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={game.background_image}/>
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
            {/* The below implementation is also correct, but it is ugly */}
            {/* {game.parent_platforms.map( platform => <Text>{platform.platform.name}</Text>)} */}

            {/* The below is implemented by destructuring the platform parameter */}
            <PlatformIconList platforms={game.parent_platforms.map( p => p.platform)}/>
        </CardBody>
    </Card>
  )
}

export default GameCard
