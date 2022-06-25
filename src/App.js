
 import React, { Component } from 'react' 
 
import FadeExample from './Animation1flip'
import './App.css' 
import Todo from './Todo'
 import TodoForm from './Components/TodoForm'
 export default class App extends Component { 

  constructor(props) {
    super(props)
  
    this.state = {
      todos:[
        
      ]
    }
  } 
  addTodo=(todo)=>{ 

let todos=[...this.state.todos];
let id=todos[todos.length-1]?todos[todos.length-1]['id']+1:0;
let newTodo={
  id,
  title:todo
}  
todos.push(newTodo);
this.setState({todos})

  } 
  completeTodo=(id)=>{
    let todos=[...this.state.todos];
    todos.filter(todo => {
          if(todo.id===id)
          { todo.complete=true

          }


        }) 
        this.setState({todos})




  }
  removeTodo=(id)=>{
    let todos=[...this.state.todos];
    todos.filter((todo,index) => {
          if(todo.id===id)
          { todos.splice(index,1)

          }


        }) 
        this.setState({todos})




  } 
removeall=()=>{
  let todos=[...this.state.todos];
  todos.filter(() => {
    
    todos.splice(0,todos.length)
  })
    

      this.setState({todos})



} 


render() {
    return (
      <div> 
           <div  id="icon">
             
             <a  id="li"  href='https://www.linkedin.com/feed/' ><i class="fa-brands fa-linkedin fa-lg"></i></a>
             <span><b>VINEETHKUMAR</b></span>
            <a id="git" href='https://github.com/vineethkumar12'> <i class="fa-brands fa-github  fa-lg"   ></i></a>
           </div>
        <FadeExample/>  
        
        <TodoForm addTod={(todo)=>this.addTodo(todo) } removeall={()=>this.removeall()} />
        <div className='T'>
       { this.state.todos.map(todo=> (
            <Todo key={todo.id} todo={todo} completeTodo={(id)=>this.completeTodo(id)}  removeTodo={(id)=>this.removeTodo(id)} />
           

       )
        )} 
        </div>
        
        
      </div>
    )
  }
 }
 