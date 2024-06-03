import WorkoutBox from "./WorkoutBox";

const ExerciseGrid = () => {
  const workouts = [
    {
      name: "Chest & Biceps + Cardio",
      exercises: [
        {
          id: "CAL",
          name: "Press Up",
          video: "https://player.vimeo.com/video/198316669?h=5d14403cac",
          sets: 2,
          reps: 20,
          tempo: "N/A",
          rest: "30",
          description: "Este es el calentamiento dinámico",
        },
        {
          id: "A1",
          name: "Incline DB Press",
          video: "https://player.vimeo.com/video/291395877?h=15959361af",
          sets: 4,
          reps: 12,
          tempo: "3111",
          rest: "No",
          description:
            "Para esta cuatri-serie necesitaras una banca inclinada y muchas mancuernas. Usa una inclinación de 30 o 45 grado. Asegúrate de que tus brazos se doblen en un ángulo de 90 grados. Siempre encima del pecho, no del hombro. Vas a bajar el peso en 3s, sostener 1s, subir en 1s y sostener 1s.",
        },
        {
          id: "A2",
          name: "Incline DB Fly",
          video: "https://player.vimeo.com/video/373824734?h=81cb2965ad",
          sets: 4,
          reps: 15,
          tempo: "2020",
          rest: "No",
          description: `Aquí baja el peso de un 30% a 50% del ejercicio anterior.
            Vas a abrir tanto como puedas manteniendo los brazos
            ligeramente flexionados.
            Vas a abrir en 2s y cerrar en 1s.`,
        },
        {
          id: "A3",
          name: "Flat DB Press",
          video: "https://player.vimeo.com/video/286295291?h=b80e79d2c7",
          sets: 4,
          reps: 15,
          tempo: "1010",
          rest: "No",
          description: `Usas el mismo peso que el ejercicio anterior.
            Vas a bajar el peso en 1s y subir en 1s con control.`,
        },
        {
          id: "A4",
          name: "Flat DB Press",
          video: "https://player.vimeo.com/video/286295291?h=b80e79d2c7",
          sets: 4,
          reps: 20,
          tempo: "Pump",
          rest: "2 min",
          description: `Aquí quiero que hagas el mismo ejercicio anterior pero bajas el peso de un 30% a 50%
            Este set lo haces tipo “pumpeo” controlando el
            movimiento pero rápidas.`,
        },
        {
          id: "B1",
          name: "Flat Bench BB Chest press or Smith machine Press",
          video: "https://player.vimeo.com/video/418565100?h=18e7f5cd40",
          sets: 3,
          reps: 10,
          tempo: "3010",
          rest: "NO",
          description: `Puedes usar la barra libre o la maquina Smith, en los tres sets vas a usar la misma banca plana.
            Trata de usar el máximo peso posible para llegar a 10 reps.
            Vas a bajar el peso en 3s y subir en 1s.`,
        },
        {
          id: "B2",
          name: "Bench Press Ups",
          video: "https://player.vimeo.com/video/693745759?h=0550587073",
          sets: 3,
          reps: 15,
          tempo: "2010",
          rest: "NO",
          description: `Apoyas tus manos firmes en la banca y los pies en el
            piso. Mantienes recta la columna y el estómago contraído. Tus hombros van sobre tus codos.
            Vas a bajar el peso en 2s y subir en 1s.`,
        },
        {
          id: "B3",
          name: "Hex press",
          video:
            "https://player.vimeo.com/video/840746052?h=a93257861b&color=d7a774&title=0&byline=0&portrait=0",
          sets: 3,
          reps: 20,
          tempo: "2011",
          rest: "2 min",
          description: `Este es un ejercicio isométrico, por lo que presionar las mancuernas entre ellas es primordial.
            Vas a bajar el peso en 2s, subir en 1s y sostener 1s.
            (respetas este temoo lo más que puedas y aumentas la
            velocidad conforme te fatigas)`,
        },
        {
          id: "FISH",
          name: "Cable fly",
          video:
            "https://player.vimeo.com/video/433505129?h=dfb3d64217&color=ffffff&title=0&byline=0&portrait=0",
          sets: 2,
          reps: 30,
          tempo: "N/A",
          rest: "60 seg",
          description: `Este es un ‘Finisher’ por lo que haces 1 ó 2 sets dependiendo de tu nivel de fatiga.
            Usa un peso con el que logres llegar al total de las reps
            sin parar. Si necesitas baja el peso y continua.
            Hazlo con control, sin tempo.`,
        },
        ,
        {
          id: "FISH-ALT",
          name: "Pec Deck",
          video: "https://player.vimeo.com/video/373829066?h=d116784b74",
          sets: 2,
          reps: 30,
          tempo: "N/A",
          rest: "60 seg",
          description: `Este es un ‘Finisher’ por lo que haces 1 ó 2 sets dependiendo de tu nivel de fatiga.
            Usa un peso con el que logres llegar al total de las reps
            sin parar. Si necesitas baja el peso y continua.
            Hazlo con control, sin tempo.`,
        },
      ],
    },
    {
      name: "Back + Abs",
      exercises: [
        {
          id: "CAL",
          name: "Cable Pull down w/ rope",
          video: "https://player.vimeo.com/video/300377548?h=f9405d2dea",
          sets: 2,
          reps: 20,
          tempo: "N/A",
          rest: "30 seg",
          description: "Este es el calentamiento dinámico",
        },
        {
          id: "A1",
          name: "Wide Grip Lat Pulldown",
          video: "https://player.vimeo.com/video/668307905?h=4ab773e4d7",
          sets: 4,
          reps: 12,
          tempo: "3111",
          rest: "No",
          description: `Si no hay agarre neutro (como se muestra en el video) puedes usar la barra plana.
          Vas a devolver el peso en 3s, sostener 1s, jalar en 1s y
          sostener 1s.`,
        },
        {
          id: "A2",
          name: "Reverse Grip Lat Pulldown",
          video: "https://player.vimeo.com/video/515878820?h=6f218afb21",
          sets: 4,
          reps: 15,
          tempo: "2020",
          rest: "No",
          description: `Aquí baja el peso de un 30% a 50% del ejercicio anterior.
          Presta atención al agarre con las palmas para arriba.
          Enfócate en la contracción de 2 seg atrás.
          Vas a devolver el peso en 2s, sostener 1s y jalar en 1s.`,
        },
        {
          id: "A3",
          name: "Wide Grip Lat Pulldown",
          video: "https://player.vimeo.com/video/668307905?h=4ab773e4d7",
          sets: 4,
          reps: 15,
          tempo: "1010",
          rest: "No",
          description: `Es el mismo ejercicio que el primero (Usas la mitad del
            peso), aquí quiero que te enfoques en realizar las 15
            reps sin tempo pero con control.`,
        },
        {
          id: "A4",
          name: "Standing DB Row",
          video: "https://player.vimeo.com/video/821411819?h=5b690ed63d",
          sets: 4,
          reps: 20,
          tempo: "Pump",
          rest: "2 min",
          description: `Es una cuatri-serie, ten las pesas lo más cerca posible
          de la polea. Este set lo haces tipo “pumpeo”
          controlando el movimiento pero rápidas.`,
        },
        {
          id: "B1",
          name: "One Arm DB Row",
          video: "https://player.vimeo.com/video/399886389?h=db3537e3dc",
          sets: 3,
          reps: 20,
          tempo: "3022",
          rest: "NO",
          description: `Haces 10 reps por lado. Usa una banca inclinada para
          apoyarte y para el siguiente set de la tri-serie.
          Jala hacia atrás en 1s, sostienes 2s, y devuelves el peso
          en 3s.`,
        },
        {
          id: "B2",
          name: "DB Prone Row on Incline Bench",
          video: "https://player.vimeo.com/video/743899926?h=1e13c2ff64",
          sets: 3,
          reps: 15,
          tempo: "2011",
          rest: "NO",
          description: `Asegúrate que las palmas vayan hacia abajo. Coloca la banca en ángulo de 45 grados.
          Jala hacia atrás en 1s, sostienes 1s, y devuelves el peso
          en 2s.`,
        },
        {
          id: "B3",
          name: "BB Reverse Grip Bent Over Row",
          video: "https://player.vimeo.com/video/364269177?h=0aab7d6894",
          sets: 3,
          reps: 20,
          tempo: "1011",
          rest: "2 min",
          description: `Este ejercicio lo puedes hacer con barra libre, con barra plana o zeta. El agarre es invertido (palmas para arriba)`,
        },
        {
          id: "FISH",
          name: "Seated Wide Grip Cable Row",
          video: "https://player.vimeo.com/video/246013967?h=adcbde026a",
          sets: 2,
          reps: 30,
          tempo: "2021",
          rest: "60 seg",
          description: `Este es un ‘Finisher’ por lo que haces 1 ó 2 sets dependiendo de tu nivel de fatiga.
          Puedes hacerlo en la maquina o en la polea en una
          banca, con o el en piso.
          Usa un peso con el que logres llegar al total de las reps
          sin parar. Si necesitas baja el peso y continua.
          Hazlo con control, sin tempo.`,
        },
      ],
    },
  ];
  return (
    <>
      {workouts.map((workout) => (
        <WorkoutBox key={workout?.name} workout={workout} />
      ))}
    </>
  );
};

export default ExerciseGrid;
