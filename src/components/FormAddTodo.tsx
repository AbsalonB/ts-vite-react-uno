import { useState } from 'react';
interface Props{
    addTodo:(text:string)=>void;
}
 const FormAddTodo = ({addTodo}:Props)=> {
    const [text,setText] = useState('');
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setText(e.target.value); 
    }
    const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const trimmedText = text.trim();
        if(!trimmedText) return;

        addTodo(trimmedText);
        setText('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">
            Todo
            <input 
            type="text" 
            id="todo" 
            placeholder="Ingrese todo"
            value={text}
            onChange={handleChange}
            />
            </label>
            <button type="submit">Add todo</button>
      </form>
    )
}

export default FormAddTodo;
