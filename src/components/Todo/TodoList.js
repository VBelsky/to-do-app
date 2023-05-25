import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import { EMPTY_TASK_LIST } from '../../constants';

const TodoList = ({ taskList, taskDeleteHandler }) => {
  return (
    <div className="flex flex-col gap-y-4 rounded-md bg-white p-5">
      {taskList.length
        ? taskList.map((task) => <TodoItem key={task.id} task={task} taskDeleteHandler={taskDeleteHandler} />)
        : EMPTY_TASK_LIST}
    </div>
  );
};
TodoList.propTypes = {
  taskList: PropTypes.node,
  taskDeleteHandler: PropTypes.func,
};
export default TodoList;
