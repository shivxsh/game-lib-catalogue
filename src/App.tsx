import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";


function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);


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
        <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre} />
      </GridItem>
    </Show>
    <GridItem area="main">
      <PlatformSelector />
      <GameGrid selectedGenre={selectedGenre} />
    </GridItem>
  </Grid>
}

export default App
