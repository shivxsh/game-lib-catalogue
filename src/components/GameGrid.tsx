import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";


interface Props{
  selectedGenre : Genre | null;
}

const GameGrid = ({selectedGenre} : Props) => {

  const {data, error, isLoading} = useGames(selectedGenre);
  const skeletons = [1,2,3,4,5,6];  //Number of cards you want to render on the screen for loading effect

  return (
    <>
        { error && <Text>{error}</Text>}

        <SimpleGrid columns={{sm: 1, md:2, lg:3, xl:3}} padding="10px" spacing={3}>
            {isLoading && 
              skeletons.map( skeleton => 
                <GameCardContainer key={skeleton}>
                  <GameCardSkeleton />
                </GameCardContainer>
            )}

            {data.map( (game) => 
              <GameCardContainer key={game.id}>
                <GameCard game={game}/>
              </GameCardContainer>
            )}
        </SimpleGrid>
    </>
  )
}

export default GameGrid
