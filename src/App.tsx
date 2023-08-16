import { useState } from "react";
import FormAddTodo from "./components/FormAddTodo";
import Todos from "./components/Todos";
export interface Todo{
  text:string,
  complete:boolean,
}
const initialTodos =[
  {
    text:"Learn react",
    complete:false,
  },
  {
    text:"Learn vue",
    complete:false,
  },
  {
    text:"Learn angular",
    complete:true,
  },
]
const App = ()=> {
  const [todos,setTodo] = useState<Todo[]>(initialTodos);

  const addTodo = (text:string)=>{
    const newTodo = {
      text,
      complete:false,
    }
    setTodo([...todos,newTodo]);
  };

  const toggleTodo = (selectedTodo:Todo)=>{
    setTodo(prevTodos=>{
      return prevTodos.map(todo=>{
        return todo===selectedTodo?{...todo,complete:!todo.complete}:todo; 
      });
    });
  }

  const removeTodo = (selectedTodo:Todo)=>{
    setTodo((prevTodos)=>{
      return prevTodos.filter(x=>x!==selectedTodo);
    })
  }

  return (
    <div className="container">
      <h1>Todo</h1>
      <FormAddTodo addTodo={addTodo}/>
      <Todos todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
    </div>
  );
}
export default App;
