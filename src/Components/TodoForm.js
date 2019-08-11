import React from 'react';

class TodoForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {}
    }    

    render(){
        return(
            <div className="todoForm" onSubmit={this.props.handleSubmit}>
                <form>
                    <input type="text" value={this.state.task} placeholder="Enter task name" onChange={this.props.handleChange} />
                    <input type="submit" value="Enter task" />
                </form>                
            </div>
        )
    }

}

export default TodoForm