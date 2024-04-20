import { Grid, GridItem, Show } from "@chakra-ui/react"


function App() {
  // return <Grid templateAreas={` "nav nav" "aside main" `}>
  return <Grid templateAreas={{
    base: ` "nav" "main" `,  //layout for mobile
    lg: `"nav nav" "aside main"`  //layout for screens larger than 1024px

    //There are other shorthands for screen sizes as well:
    //sm, xl, md, ....
    }}>

    <GridItem area="nav" bg='red'>Nav</GridItem>

    {/*<Show> is used for displaying the layout for the specified screen size (above = "")*/}
    <Show above="lg">
      <GridItem area="aside" bg='yellow'>Aside</GridItem>
    </Show>
    <GridItem area="main" bg='blue'>Main</GridItem>
  </Grid>
}

export default App
