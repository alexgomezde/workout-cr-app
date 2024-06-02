import { SimpleGrid } from "@chakra-ui/react"
import ExerciseCard from "./ExerciseCard"


const ExerciseGrid = () => {
    const exercises = [
        {
            id: 'CAL',
            name: 'Press Up',
            video: 'https://player.vimeo.com/video/198316669?h=5d14403cac',
            sets: 2,
            reps: 20,
            tempo: 'N/A',
            rest: '30',
            description: 'Este es el calentamiento dinámico'
        },
        {
            id: 'A1',
            name: 'Incline DB Press',
            video: 'https://player.vimeo.com/video/291395877?h=15959361af',
            sets: 4,
            reps: 12,
            tempo: '3111',
            rest: 'No',
            description: 'Para esta cuatri-serie necesitaras una banca inclinada y muchas mancuernas. Usa una inclinación de 30 o 45 grado. Asegúrate de que tus brazos se doblen en un ángulo de 90 grados. Siempre encima del pecho, no del hombro. Vas a bajar el peso en 3s, sostener 1s, subir en 1s y sostener 1s.'
        },
        {
            id: 'A2',
            name: 'Incline DB Fly',
            video: 'https://player.vimeo.com/video/373824734?h=81cb2965ad',
            sets: 4,
            reps: 15,
            tempo: '2020',
            rest: 'No',
            description: `Aquí baja el peso de un 30% a 50% del ejercicio anterior.
            Vas a abrir tanto como puedas manteniendo los brazos
            ligeramente flexionados.
            Vas a abrir en 2s y cerrar en 1s.`
        },
        {
            id: 'A3',
            name: 'Flat DB Press',
            video: 'https://player.vimeo.com/video/286295291?h=b80e79d2c7',
            sets: 4,
            reps: 15,
            tempo: '1010',
            rest: 'No',
            description: `Usas el mismo peso que el ejercicio anterior.
            Vas a bajar el peso en 1s y subir en 1s con control.`
        },
        {
            id: 'A4',
            name: 'Flat DB Press',
            video: 'https://player.vimeo.com/video/286295291?h=b80e79d2c7',
            sets: 4,
            reps: 20,
            tempo: 'Pump',
            rest: '2 min',
            description: `Aquí quiero que hagas el mismo ejercicio anterior pero bajas el peso de un 30% a 50%
            Este set lo haces tipo “pumpeo” controlando el
            movimiento pero rápidas.`
        },
        {
            id: 'B1',
            name: 'Flat Bench BB Chest press or Smith machine Press',
            video: 'https://player.vimeo.com/video/418565100?h=18e7f5cd40',
            sets: 3,
            reps: 10,
            tempo: '3010',
            rest: 'NO',
            description: `Puedes usar la barra libre o la maquina Smith, en los tres sets vas a usar la misma banca plana.
            Trata de usar el máximo peso posible para llegar a 10 reps.
            Vas a bajar el peso en 3s y subir en 1s.`
        },
        {
            id: 'B2',
            name: 'Bench Press Ups',
            video: 'https://player.vimeo.com/video/693745759?h=0550587073',
            sets: 3,
            reps: 15,
            tempo: '2010',
            rest: 'NO',
            description: `Apoyas tus manos firmes en la banca y los pies en el
            piso. Mantienes recta la columna y el estómago contraído. Tus hombros van sobre tus codos.
            Vas a bajar el peso en 2s y subir en 1s.`
        },
        {
            id: 'B3',
            name: 'Hex press',
            video: 'https://player.vimeo.com/video/840746052?h=a93257861b&color=d7a774&title=0&byline=0&portrait=0',
            sets: 3,
            reps: 20,
            tempo: '2011',
            rest: '2 min',
            description: `Este es un ejercicio isométrico, por lo que presionar las mancuernas entre ellas es primordial.
            Vas a bajar el peso en 2s, subir en 1s y sostener 1s.
            (respetas este temoo lo más que puedas y aumentas la
            velocidad conforme te fatigas)`
        },
        {
            id: 'FISH',
            name: 'Cable fly',
            video: 'https://player.vimeo.com/video/433505129?h=dfb3d64217&color=ffffff&title=0&byline=0&portrait=0',
            sets: 2,
            reps: 30,
            tempo: 'N/A',
            rest: '60 seg',
            description: `Este es un ‘Finisher’ por lo que haces 1 ó 2 sets dependiendo de tu nivel de fatiga.
            Usa un peso con el que logres llegar al total de las reps
            sin parar. Si necesitas baja el peso y continua.
            Hazlo con control, sin tempo.`
        },
        ,
        {
            id: 'FISH-ALT',
            name: 'Pec Deck',
            video: 'https://player.vimeo.com/video/373829066?h=d116784b74',
            sets: 2,
            reps: 30,
            tempo: 'N/A',
            rest: '60 seg',
            description: `Este es un ‘Finisher’ por lo que haces 1 ó 2 sets dependiendo de tu nivel de fatiga.
            Usa un peso con el que logres llegar al total de las reps
            sin parar. Si necesitas baja el peso y continua.
            Hazlo con control, sin tempo.`
        },
    ]
  return (
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding='10px'>
        {exercises.map((exercise) => ( 
          <ExerciseCard key={exercise.id} exercise={exercise}/>
        ))}
    </SimpleGrid>
  )
}

export default ExerciseGrid