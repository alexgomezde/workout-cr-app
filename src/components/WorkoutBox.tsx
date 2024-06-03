import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import ExerciseCard from "./ExerciseCard";
import { useState } from "react";

interface Exercise {
  id: string;
  name: string;
  video: string;
  sets: number;
  reps: number;
  tempo?: string;
  rest?: string;
  description: string;
}

interface Workout {
  name: string;
  exercises?: Exercise[];
}

interface Props {
  workout?: Workout;
}

const WorkoutBox = ({ workout }: Props) => {
  if (!workout) return null;

  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  const exercises = workout.exercises || []; // Default to an empty array if exercises is undefined or null

  return (
    <Box
      padding="10px"
      borderRadius="20px"
      border="1px solid white"
      margin="10px"
    >
      <HStack justifyContent="space-between">
        <Center>
          <Heading marginBottom="20px" size="md">
            {workout.name}
          </Heading>
        </Center>

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
