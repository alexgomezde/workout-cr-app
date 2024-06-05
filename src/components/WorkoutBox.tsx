import { Box, Button, HStack, Heading, SimpleGrid } from "@chakra-ui/react";
import ExerciseCard from "./ExerciseCard";
import { useState } from "react";
import { Exercise } from "./ExerciseCard";

interface Workout {
  name: string;
  exercises?: Exercise[] | any[];
}

interface Props {
  workout: Workout;
}

const WorkoutBox = ({ workout }: Props) => {
  if (!workout) return null;

  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  const exercises = workout.exercises || [];
  return (
    <Box
      padding="10px"
      borderRadius="20px"
      border="1px solid white"
      margin="10px"
    >
      <HStack justifyContent="space-between" alignItems="center">
        <Heading marginBottom="20px" size="md">
          {workout.name}
        </Heading>

        <Button onClick={toggle}>{show ? "Ocultar" : "Mostrar"}</Button>
      </HStack>

      {show && (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
          {exercises.map((exercise) => (
            <ExerciseCard key={exercise?.id} exercise={exercise} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default WorkoutBox;
