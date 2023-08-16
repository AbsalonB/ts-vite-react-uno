import { Todo } from "../App";

interface Props{
    todo:Todo;
    toggleTodo:(selectedTodo:Todo)=>void;
    removeTodo:(selectedTodo:Todo)=>void;
 }
const TodoItem = ({todo,toggleTodo,removeTodo}:Props)=>{
    return(
            <article>
                    <div key={todo.text}>
                    <label htmlFor="todo">
                        <input 
                        type="checkbox" 
                        checked={todo.complete} 
                        id="todo"
                        onChange={()=>toggleTodo(todo)}
                        />
                    {todo.text}
                    </label>
                    <button 
                        onClick={()=>removeTodo(todo)}
                        type="button"
                        className="contrast"
                    >
                        Remove
                    </button>
                    </div>
            </article>
    )
}

export default TodoItem;