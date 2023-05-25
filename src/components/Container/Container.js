import React, { useEffect, useState } from 'react';
import Button from '../UI/Button';
import { PAGE_TITLE, TODO_FILTER_OPTIONS, TODO_LIST_DUMP } from '../../constants';
import Select from '../UI/Select';
import TodoList from '../Todo/TodoList';
import { lowerCase } from 'lodash';

const Container = () => {
  const [selected, setSelected] = useState(TODO_FILTER_OPTIONS[0]);
  const [currentTaskList, setCurrentTaskList] = useState(TODO_LIST_DUMP);
  const [sortedTaskList, setSortedTaskList] = useState(currentTaskList);

  useEffect(() => {
    const filteredTaskList = currentTaskList.filter((task) => task.status === lowerCase(selected.name));
    const taskList = selected.name === 'All' ? currentTaskList : filteredTaskList;
    setSortedTaskList(taskList);
  }, [selected, currentTaskList]);

  const taskDeleteHandler = (taskId) => {
    setCurrentTaskList(currentTaskList.filter((task) => task.id !== taskId));
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl">
        <h1 className="text-center text-2xl font-bold uppercase text-gray-700">{PAGE_TITLE}</h1>
        <div className="mt-8 flex items-center justify-between">
          <Button title="Add task" />
          <Select options={TODO_FILTER_OPTIONS} selected={selected} setSelected={setSelected} />
        </div>
        <div className="mt-4">
          <TodoList taskList={sortedTaskList} taskDeleteHandler={taskDeleteHandler} />
        </div>
      </div>
    </div>
  );
};
export default Container;
