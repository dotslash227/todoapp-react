import React from 'react';
import './App.css';
import TodoForm from './Components/TodoForm'
import RenderList from './Components/RenderList';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        item:{key:'', task:''},
        tasksList: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeletion = this.handleDeletion.bind(this);
  }

  handleChange(event){
      this.setState({
          item:{key:Date.now(), task:event.target.value}
      }); 
  }

  handleSubmit(event){    
    const tasks = this.state.tasksList
    tasks.push(this.state.item);
    this.setState({tasksList:tasks});    
    event.preventDefault();
  }

  handleDeletion(key){   
    console.log(key);
    let index = 0;
    let newTaskList = this.state.tasksList;
    for(index=0;index<newTaskList.length;index++){
      if(newTaskList[index].key == key){
        newTaskList.splice(index,1);        
      }
    }
    this.setState({tasksList:newTaskList});
  }

  render(){
    return (
      <div className="App">
        <h1>Simple todo-list with react.js</h1>
        <h4>Dotslash227</h4>
        <TodoForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <RenderList tasksList={this.state.tasksList} handleDeletion={this.handleDeletion} />
      </div>
    )
  }
}

export default App;
