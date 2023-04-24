import { createContext, useReducer } from "react";
import axios from "axios";
import AppReducer from "./AppReducer";

const initialState = {
    tasks: []
}

export const AppContext = createContext(initialState)

export const AppProvider = ({children}) =>{

    //Reducer Method
    const [state, dispatch] = useReducer(AppReducer, initialState)

    /*
    -------------------------------------------------------
                Actions
    -------------------------------------------------------
    */

    //Get All The tasks from API
    const getTasks = async() =>{
        const response = await axios.get('/getTasks')
        dispatch({
            type: 'TASK_DATA',
            payload: [response.data]
        })
    };

    return (
        <AppContext.Provider value={{
            taskList: state.tasks,
            getTasks
        }}>{children}</AppContext.Provider>
    )
}

