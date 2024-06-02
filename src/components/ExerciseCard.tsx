import { AspectRatio, Card, CardBody, HStack, Heading, Text } from "@chakra-ui/react";

interface Exercise {
    id: string;
    name: string;
    video: string;
    sets: number;
    reps: number;
    tempo: string;
    rest: string;
    description: string;
}

interface Props {
    exercise: Exercise
}


const ExerciseCard = ({exercise} : Props) => {
  return (
    <Card margin='5px' borderRadius='10px' overflow='hidden'>
        <AspectRatio width='100%' ratio={1}>
            <iframe
                title={exercise.name}
                src={exercise.video}
                allowFullScreen
            />
        </AspectRatio>

        <CardBody>
            <Heading size='md'>{exercise.id} | {exercise.name}</Heading>
            <Text marginTop='10px' >{exercise.description}</Text>
            <HStack marginTop='10px' justifyContent='space-between'>
                <Text><Text as='b'>Sets:</Text> {exercise.sets}</Text>
                <Text><Text as='b'>Reps:</Text> {exercise.reps}</Text>
                <Text><Text as='b'>Tempo:</Text> {exercise.tempo}</Text>
                <Text><Text as='b'>Descanso:</Text> {exercise.rest}</Text> 
            </HStack>
        </CardBody>
    </Card>
  )
}

export default ExerciseCard