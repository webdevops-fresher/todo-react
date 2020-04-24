import * as actionTypes from './actions';
import axios from 'axios';




//get current id of tasks
export const getCurrentId=(data)=>{
    const lastKey=data[Object.keys(data).pop()];
    return {
        type:actionTypes.CURRENT_ID,
        id:lastKey.newTaskId+1
    }
}


export const noIdFound=()=>{
    return {
        type:actionTypes.NO_ID
    }
}

export const currentTaskId=()=>{
    return dispatch=>{
        axios.get("https://todo-a1ea9.firebaseio.com/task.json").then(response=>{
            console.log(response);
            dispatch(getCurrentId(response.data))
        }).catch(error=>{
            dispatch(noIdFound())
        })
    }
}









//add a new task to firebase
export const taskStored=(id)=>{
    return {
        type:actionTypes.TASK_STORED,
        id:id,
        successMsg:"Task  added to your list"
    }
}


export const taskError=(error)=>{
    return {
        type:actionTypes.TASK_STORAGE_ERROR,
        error:error
    }
}

export const addNewtask=(newTaskId,newTaskDescription,newTaskCompletionTime)=>{
    return dispatch=>{
        const newData={
            newTaskId:newTaskId,
            newTaskDescription:newTaskDescription,
            newTaskCompletionTime:newTaskCompletionTime
        }
        if(newTaskCompletionTime!='Invalid Date'){
            axios.post("https://todo-a1ea9.firebaseio.com/task.json",newData).then(response=>{
                dispatch(taskStored(newTaskId))
            }).catch(error=>{
                dispatch(taskError(error.response.data.error))
            })
        }else{
            dispatch(dateError())
        }
    }
}
export const dateError=()=>{
    return {
        type:actionTypes.DATE_ERROR,
        error:"Type the date in the mentioned format"
    }
}







//retrieve all tasks
export const allTasksRetrieved=(tasks)=>{
    return {
        type:actionTypes.ALL_TASKS,
        allTasks:tasks
    }
}

export const tasksNotRetrieved=(error)=>{
    return {
        type:actionTypes.TASK_STORAGE_ERROR,
        error:error
    }
}

export const importAllTasks=()=>{
    return dispatch=>{
        axios.get("https://todo-a1ea9.firebaseio.com/task.json").then(response=>{
            dispatch(allTasksRetrieved(response.data))
        }).catch(error=>{
            dispatch(tasksNotRetrieved(error.response.data.error))
        })
    }
}

