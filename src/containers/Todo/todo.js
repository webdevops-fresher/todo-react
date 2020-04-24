import React from 'react';
import classes from './todo.css';
import {connect} from 'react-redux';
import * as actions from '../store/todoactions';



class Todo extends React.Component{

    state={
        description:'',
        taskCompletionDate:null
    }


    onChangeHandler=(event)=>{
       console.log(event.target.name);
       if(event.target.name=='description'){
           this.setState({description:event.target.value});
       }else{
           this.setState({taskCompletionDate:new Date(event.target.value)});
       }
    }

    onRegisterHandler=()=>{
        this.props.onRegister(this.props.taskId,this.state.description,this.state.taskCompletionDate);
        document.getElementById('desc').value='';
        document.getElementById('date').value='';
    }


    componentDidMount(){
        this.props.getCurrentId();
    }

   

    render(){
        return (
            <div className={classes.container}>
                <h1 className={classes.title}>Add a new task to do</h1>
                <div className={classes.flex}>
                    <div>
                        <h4>Task Id</h4>
                        <h4>{this.props.taskId}</h4>
                    </div>
                    <div>
                        <h4>Task Description</h4>
                        <textarea rows="4" cols="30" name="description" id="desc" onChange={this.onChangeHandler}/>
                    </div>
                    <div>
                        <h4>Task Completion Date</h4>
                        <input type="text" name="completiondate"  id="date" onChange={this.onChangeHandler} />
                        <span className={classes.span}>Date format:October 14,2019</span>
                    </div>
                </div>
                <button 
                onClick={this.onRegisterHandler} 
                className={classes.button}>Register Task</button>
                <span className={classes.span}>{this.props.error!=null?this.props.error:this.props.successMsg}</span>
            </div>
        );
    }
}



const mapStateToProps=state=>{
    return {
        taskId:state.taskId,
        error:state.storageError,
        successMsg:state.successMsg
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        onRegister:(taskId,taskDescription,taskCompletionTime)=>{
            return dispatch(actions.addNewtask(taskId,taskDescription,taskCompletionTime))
        },
        getCurrentId:()=>dispatch(actions.currentTaskId()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todo);