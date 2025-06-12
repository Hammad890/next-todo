'use client'

import { useState } from "react";

type Todo= {
    id: number;
    text: string;
    isEditing: boolean;
};

type Prop={
    todo: Todo;
    deleteTodo:(id: number) => void;
    updateTodo: (id: number, newText: string) => void;
    toggleEdit: (id: number) => void;
}

export default function TodoItem({todo,deleteTodo,updateTodo,toggleEdit}:Prop){
    const [editText,setEditText]= useState(todo.text);

    const handleEdit=()=>{
        if (editText.trim() !== ''){
            updateTodo(todo.id,editText);
        }
    }
    return(
         <li className="flex justify-between items-center bg-gray-100 p-2 my-2 rounded">
      {todo.isEditing ? (
        <div className="flex w-full gap-2">
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-1 border p-1 rounded"
          />
          <button
            onClick={handleEdit}
            className="bg-green-500 text-white px-2 py-1 rounded"
          >
            Save
          </button>
        </div>
      ) : (
        <>
          <span>{todo.text}</span>
          <div className="space-x-2">
            <button
              onClick={() => toggleEdit(todo.id)}
              className="text-blue-500 hover:underline"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}
