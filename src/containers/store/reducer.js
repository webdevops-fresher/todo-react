import * as actionTypes from './actions';

const initialState={
    taskId:0,
    allTasks:null,
    storageError:null,
    loading:false,
    successMsg:null
}


const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.ALL_TASKS:
            return {
                ...state,
                allTasks:action.allTasks,
                storageError:null
            }
        case actionTypes.TASK_STORAGE_ERROR:
            return {
                ...state,
                storageError:action.error
            }
        case actionTypes.TASK_STORED:
            return {
                ...state,
                taskId:action.id+1,
                storageError:null,
                successMsg:action.successMsg
            }
        case actionTypes.CURRENT_ID:
            return {
                ...state,
                taskId:action.id,
                storageError:null
            }
        case actionTypes.NO_ID:
            return {
                ...state,
                taskId:0,
                storageError:null
            }
        case actionTypes.DATE_ERROR:
            return {
                ...state,
                storageError:action.error
            }
        default:
            return state

    }
}



export default reducer;