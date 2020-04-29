import React from 'react';
import fire from '../../containers/auth';
import Todo from '../../containers/Todo/todo';
import AllTasks from '../../containers/AllTasks/allTasks';
import{Link,Route,Switch} from 'react-router-dom';



class HomePage extends React.Component{
    state={
        email:'',
        password:'',
        user:null,
        error:null
    }


    onChangeHandler=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }


    componentDidMount(){
        this.authListener();
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        if(prevState.email!=this.state.email && prevState.password!=this.state.password){
            this.setState({email:'',password:''})
        }
    }


    authListener=()=>{
        fire.auth().onAuthStateChanged(user=>{
            if(user){
                this.setState({user:user});
            }else{
                this.setState({user:null});
            }
        })
    }

    login=(event)=>{
        event.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error);
            this.setState({error:error})
        })
    }

    signup=(event)=>{
        event.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error);
            this.setState({error:error})
        })
    }
    logout=()=>{
        fire.auth().signOut();
    }

 render(){
     let content=( <div>
         <ul style={{listStyleType:'none'}}>
     <li style={{display:'inline',marginLeft:'20px'}}><Link to="/newtask" style={{textDecoration:'none'}}>New Task</Link></li>
     <li style={{display:'inline',marginLeft:'20px'}}><Link to="/all-tasks" style={{textDecoration:'none'}}>All Tasks</Link></li>
     <li style={{display:'inline',marginLeft:'20px'}}>
         <button style={{background:'red',border:'1px solid red',color:'white'}} onClick={this.logout}>Logout</button>
    </li>
   </ul>
   <Switch>
     <Route exact path="/newtask" component={Todo}/>
     <Route exact path="/all-tasks" component={AllTasks} />
   </Switch>
     </div>);
     let form=(<div><form style={{margin:'auto',maxWidth:'80%',textAlign:'center',border:'1px solid transparent'}}>
     <label htmlFor="email" style={{display:'block'}}>Email:</label>
     <input type="email" name="email" value={this.state.email} onChange={this.onChangeHandler}/>
     <label htmlFor="password" style={{display:'block'}}>Password:</label>
     <input type="password" name="password" value={this.state.password} onChange={this.onChangeHandler}/>
 </form>
 <button onClick={this.login} 
     style={{border:'1px solid #178a2a',background:'#178a2a',color:'white',marginTop:'10px'}}>Login</button>
 <button onClick={this.signup} 
 style={{border:'1px solid #912138',background:'#912138',color:'white',marginTop:'10px',marginLeft:'20px'}}>
 SignUp</button></div>);
    return (
        <div style={{margin:'auto',maxWidth:'80%',textAlign:'center'}}>
            <h4 style={{fontFamily:'Courier New'}}>Todo App</h4>
            <p style={{fontFamily:'Palatino'}}>To Do is a cloud-based task management application. 
                It allows users to manage their tasks from a smartphone, tablet and computer.</p>
                {this.state.user==null ? form : null}
                <div style={{margin:'auto',maxWidth:'80%',textAlign:'center'}}>
                    {this.state.user ? content:<h1>Login To Use The Services</h1>}
                    {this.state.error ? <h5>Either you didn't SignUp or Email or Password is incorrect</h5>:null}
                </div>
        </div>
    );
 }
}


export default HomePage;