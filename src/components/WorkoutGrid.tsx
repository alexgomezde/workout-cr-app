import WorkoutBox from "./WorkoutBox";
import workoutsData from "../utils/workouts-data";

const ExerciseGrid = () => {
  return (
    <>
      {workoutsData.map((workout) => {
        return <WorkoutBox key={workout.name} workout={workout} />;
      })}
    </>
  );
};

export default ExerciseGrid;
