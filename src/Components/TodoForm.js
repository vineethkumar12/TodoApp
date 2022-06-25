import React, { Component } from 'react'
export default class TodoForm extends Component { 
    constructor(props) {
      super(props)
    
      this.state = {
         todotext:""
      }
    } 
    addTodo=(e)=>{
     e.preventDefault();
     this.props.addTod(this.state.todotext);  
     this.setState( {todotext:""})

    }
    

    render() {
        return (
            <div >
                <form autoComplete="on" onSubmit={this.addTodo}>
                <input  id="todoform" type="text" value={this.state.todotext}  placeholder="Add your todo here" 
                  onChange={(e)=>this.setState( {todotext:e.target.value})}  />   
                  <input type="Submit" id="submit" /> 
             
                  
                </form> 
                <button className='x1' onClick={()=>this.props.removeall()}>Clear All</button>
            </div>
        )
    }
}
