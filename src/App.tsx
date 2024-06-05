import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import WorkoutGrid from "./components/WorkoutGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <WorkoutGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
