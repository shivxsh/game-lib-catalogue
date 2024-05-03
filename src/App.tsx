import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"


function App() {
  // return <Grid templateAreas={` "nav nav" "aside main" `}>
  return <Grid templateAreas={{
    base: ` "nav" "main" `,  //layout for mobile
    lg: `"nav nav" "aside main"`  //layout for screens larger than 1024px

    //There are other shorthands for screen sizes as well:
    //sm, xl, md, ....
    }}>

    {/* Specifying 'area' will let us know, which Grid template it corresponds to */}
    <GridItem area="nav">  
      <NavBar />
    </GridItem>

    {/*<Show> is used for displaying the layout for the specified screen size (above = "")*/}
    <Show above="lg">
      <GridItem area="aside">
        <GenreList />
      </GridItem>
    </Show>
    <GridItem area="main">
      <GameGrid />
    </GridItem>
  </Grid>
}

export default App
