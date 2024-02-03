
import { getAll } from "../api/excercisesByDifficulty"
import { useEffect, useState } from "react"

const Beginner = () => {
    const [exercises, setExercises] = useState(null)
    
    useEffect(()=>{
        getAll
        .then(response => 
            setExercises(response.data)
        )
        .catch(err => console.log(err))
    }, [])

    console.log(exercises)
  return (
    <div>
        {
            exercises && exercises.map( (exercise, index) => (
                <h1 key={index}>{exercise.name}</h1>
            ))
        }
    </div>
  )
}

export default Beginner