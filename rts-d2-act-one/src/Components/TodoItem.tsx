// components/TodoItem.tsx
import React from 'react';
import { Todo } from '../types/Todo';

type TodoItemProps = {
  todo: Todo;
  toggleTodo: (id: string) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  const handleCheckboxChange = () => {
    toggleTodo(todo.id);
  };

  return (
    <li>
      <input type="checkbox" checked={todo.isCompleted} onChange={handleCheckboxChange} />
      <span>{todo.text}</span>
    </li>
  );
};

export default TodoItem;