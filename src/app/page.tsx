'use client'
import { useEffect, useState } from "react";
import TodoItem from "@/compoents/todo-item";



type Todo = {
  id: number;
  text: string;
  isEditing: boolean;
};

export default function Home() {
  const [todos,setTodos]= useState<Todo[]>([]);
  const [input,setInput]= useState('');

  useEffect(()=>{
   const savedTodos= localStorage.getItem('todos');
    if (savedTodos){
      setTodos(JSON.parse(savedTodos));
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos])
  const addTodo=()=>{
    if(input.trim() === "")return;

  const newTodo:Todo={
    id : Date.now(),
    text: input.trim(),
    isEditing: false,
  }
  setTodos([...todos,newTodo])
  setInput('')
  };

  const deleteTodo= (id:number)=>{
    setTodos(todos.filter((todo)=>todo.id !== id))
  };

  const updateTodo=(id:number,newText: string)=>{
    setTodos((prev)=>
      prev.map((todo)=>
         todo.id === id ? { ...todo, text: newText, isEditing: false } : todo
      )
    );
  };

   const toggleEdit=(id: number)=>{
    setTodos((prev)=>
      prev.map((todo)=>
      todo.id === id ? {...todo,isEditing: !todo.isEditing}:todo
  )
    )
   }

  

  return (
     <main className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">📝 To-Do List</h1>

      <div className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
          className="flex-1 border p-2 rounded"
          placeholder="Add a new task"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
            toggleEdit={toggleEdit}
          />
        ))}
      </ul>
    </main>
  );
}