import { Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";


export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);  //an object of type GameQuery

  // return <Grid templateAreas={` "nav nav" "aside main" `}>
  return <Grid templateAreas={{
    base: ` "nav" "main" `,  //layout for mobile
    lg: `"nav nav" "aside main"`  //layout for screens larger than 1024px

    //There are other shorthands for screen sizes as well:
    //sm, xl, md, ....
  }}
    templateColumns={{
      base: '1fr',  //1 fraction: takes up all the space
      lg: '200px 1fr'
    }}>

    {/* Specifying 'area' will let us know, which Grid template it corresponds to */}
    <GridItem area="nav">
      <NavBar />
    </GridItem>

    {/*<Show> is used for displaying the layout for the specified screen size (above = "")*/}
    <Show above="lg">
      <GridItem area="aside" paddingX={5}>
        <GenreList onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} selectedGenre={gameQuery.genre} />
      </GridItem>
    </Show>
    <GridItem area="main">
      <HStack spacing={5} paddingLeft={2} marginBottom={5}>
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
        <SortSelector />
      </HStack>
      <GameGrid gameQuery={gameQuery} />
    </GridItem>
  </Grid>
}

export default App
