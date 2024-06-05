import {
  AspectRatio,
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export interface Exercise {
  id: string;
  name: string;
  video?: string;
  sets?: string;
  reps?: string;
  tempo?: string;
  rest?: string;
  description?: string;
}

interface Props {
  exercise?: Exercise;
}

const ExerciseCard = ({ exercise }: Props) => {
  if (!exercise) {
    return null;
  }

  const [show, setShow] = useState(true);

  return show ? (
    <Card margin="5px" borderRadius="10px" overflow="hidden">
      <AspectRatio ratio={16 / 9}>
        <iframe title={exercise.name} src={exercise.video} allowFullScreen />
      </AspectRatio>

      <CardBody>
        <Heading size="md">
          {exercise.id} | {exercise.name}
        </Heading>
        <Text marginTop="10px">{exercise.description}</Text>
        <HStack marginTop="10px" justifyContent="space-between">
          <Text>
            <Text as="b">Sets:</Text> {exercise.sets}
          </Text>
          <Text>
            <Text as="b">Reps:</Text> {exercise.reps}
          </Text>
          <Text>
            <Text as="b">Tempo:</Text> {exercise.tempo}
          </Text>
          <Text>
            <Text as="b">Descanso:</Text> {exercise.rest}
          </Text>
        </HStack>
        <Button
          marginTop="10px"
          variant="outline"
          onClick={() => setShow(false)}
        >
          Ocultar
        </Button>
      </CardBody>
    </Card>
  ) : (
    <Card margin="5px" borderRadius="10px">
      <CardBody>
        <Heading size="md">
          {exercise?.id} | {exercise?.name}
        </Heading>
        <Button
          marginTop="10px"
          variant="outline"
          onClick={() => setShow(true)}
        >
          Mostrar
        </Button>
      </CardBody>
    </Card>
  );
};

export default ExerciseCard;
