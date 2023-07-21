import React, { useState } from "react";
import '../../../assets/Todo.css'

type TodoProps = {
  id: number;
  Title: string;
  Completed: boolean;
};

export const ToDoList = () => {
  const [Todos, setTodos] = useState<TodoProps[]>([]);

  const [todoValue, settodoValue] = useState("");
  const [nextId, setNextId] = useState(0); 

  const AddTodo = (Title: string) => {
    const newTodo = {
      id: nextId,
      Title: Title,
      Completed: false,
    };
    setTodos((prevRows) => [ ...prevRows,newTodo]);
    setNextId(nextId + 1);
    settodoValue('');
  };

  const UpdateTask = (id: string) => {
    const updatedItems = Todos.map((item) => {
      if (item.id.toString() === id) {
        return {
          ...item,
          Completed: true,
        };
      }
      return item;
    });

    setTodos(updatedItems);
  };
 
  return (
    <>
      <div className="container-todo ">
          
        {Todos.length === 0 ? (
          <>No Task for today</>
        ) : (
          <>
            
            {Todos.map((todos, index) => (
              <div className="content-todo" key={todos.id}> 
                <div className="todos">
                  {todos.Completed ? (
                    <div style={{ textDecoration: "line-through" }}>
                      {todos.Title}
                    </div>
                  ) : (
                    <>{todos.Title}</>
                  )}
                  {!todos.Completed ? (
                    <button id={index.toString()} className="btn-todo" onClick={(e) => { UpdateTask(e.currentTarget.id); }} > Done </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </>
        )}

        <div className="controls-todo">
          <input value = {todoValue} onChange={(e) => { settodoValue(e.target.value); }} className="input-todo" />
          <button className="btn-todo" onClick={() => { AddTodo(todoValue); }} > Add Task </button>
        </div>
      </div>
    </>
  );
};
