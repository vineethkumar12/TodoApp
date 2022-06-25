import React, { Component } from 'react'

export default class Todo extends Component { 




    render() {
        return (
            <div>
                <div className='todo'>
              <p style={{textDecoration:this.props.todo.complete?'line-through':''}}>{this.props.todo.title}</p>
                <button className='complete' onClick={()=>this.props.completeTodo(this.props.todo.id)}>Complete</button> 
                <button className='x' onClick={()=>this.props.removeTodo(this.props.todo.id)}>x</button> 
               
                </div>
                
            </div>
        )
    }
}

