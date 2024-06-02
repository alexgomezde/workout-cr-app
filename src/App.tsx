import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import ExerciseGrid from './components/ExerciseGrid'

function App() {

  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "main"`
  }}>
    <GridItem area="nav">
      <NavBar />
    </GridItem>
    <GridItem area="main" >
      <ExerciseGrid />
    </GridItem>
  </Grid>
 
}

export default App
