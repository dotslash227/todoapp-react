import React from 'react';
import '../App.css';

class RenderList extends React.Component{

    constructor(props){
        super(props);
        this.state = {}        
    }

    render(){
        // const tasksList = this.props.tasksList.map((item,key)=><li id={item.key}>{item.task} | <a href="#" onClick={()=>this.props.handleDeletion(item.key)}>Remove</a></li>)
        const tasksList = this.props.tasksList.map((item,key)=>{            
            return(
                <li>{item.task} | <a href="#" onClick={()=>this.props.handleDeletion(item.key)}>Remove It</a></li>
            )
        })
        return(
            <ul clasName="taskList">
                {tasksList}
            </ul>
        )
    }

}

export default RenderList;