import React from 'react';
import TodoItem from './TodoItem';
import { TODO_LIST_DUMP } from '../../constants';

const TodoList = () => {
  const taskList = TODO_LIST_DUMP;
  return (
    <div className="flex flex-col gap-y-4 rounded-md bg-white p-5">
      {taskList.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </div>
  );
};
export default TodoList;
