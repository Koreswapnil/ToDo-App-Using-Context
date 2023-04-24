const AppReducer = (state, action) =>{
    switch(action.type) {
        case 'TASK_DATA':
            return {
                ...state,
                tasks: [...state.tasks, ...action.payload]
            }
        default:
            return state
    }
}

export default AppReducer;