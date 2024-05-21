import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";


interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {

  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        {/* The below implementation is also correct, but it is ugly */}
        {/* {game.parent_platforms.map( platform => <Text>{platform.platform.name}</Text>)} */}

        {/* The below is implemented by destructuring the platform parameter */}
        <HStack marginBottom={3} justify='space-between'>
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize='2xl'>{game.name}</Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard
