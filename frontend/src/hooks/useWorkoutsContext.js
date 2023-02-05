import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from 'react'

//passing the workoutsContext object to the context. Returns to us the value of this context. Value we passed into the providers component

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)

    if (!context) {
        throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider')
    }

    return context
}
