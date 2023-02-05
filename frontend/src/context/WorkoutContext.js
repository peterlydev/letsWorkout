import React from 'react'
import { createContext } from 'react'

//Allows us make a new context that we can provide to components in the application
//Invokes the function. This creates a brand new context.
//Need to export this.
//Provide that context to the application component tree, so that the components can access it

export const WorkoutsContext = createContext()

//Making a context provider component. This will be a regular react component that's going to wrap the rest of the application eventually

export const WorkoutsContextProvider = () => {

    return(
        <WorkoutsContextProvider>

        </WorkoutsContextProvider>
    )
}
