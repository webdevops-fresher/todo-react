import React from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../store/todoactions';
import classes from './allTasks.css';

class AllTasks extends React.Component{

    componentDidMount(){
        this.props.allTasks();
    }

    render(){
        let content=<div className={classes.loader}></div>
        if(this.props.tasks!=null){
            let retirevedTaskKeys=Object.keys(this.props.tasks);
            content=(
                <div className={classes.containerAll}>
                {retirevedTaskKeys.map((element,index)=>{
                    return (
                        <div className={classes.container} key={index}>
                             <h1>TASK ID:{this.props.tasks[element].newTaskId}</h1>
                    <h3>TASK DESCRIPTION:{this.props.tasks[element].newTaskDescription}</h3>
                    <h5>TASK COMPLETION TIME:{this.props.tasks[element].newTaskCompletionTime}</h5>
                        </div>
                    );
                })}
            </div>
            );
        }
        return (
           <div>
               {content}
           </div>
        );
    }
}


const mapStateToProps=state=>{
    return {
        tasks:state.allTasks,
        error:state.storageError
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        allTasks:()=>dispatch(actionTypes.importAllTasks())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AllTasks);