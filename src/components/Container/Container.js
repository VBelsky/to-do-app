import React, { useState } from 'react';
import Button from '../UI/Button';
import { PAGE_TITLE, TODO_FILTER_OPTIONS } from '../../constants';
import Select from '../UI/Select';
import TodoList from '../Todo/TodoList';

const Container = () => {
  const [selected, setSelected] = useState(TODO_FILTER_OPTIONS[0]);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl">
        <h1 className="text-center text-2xl font-bold uppercase text-gray-700">{PAGE_TITLE}</h1>
        <div className="mt-8 flex items-center justify-between">
          <Button title="Add task" />
          <Select options={TODO_FILTER_OPTIONS} selected={selected} setSelected={setSelected} />
        </div>
        <div className="mt-4">
          <TodoList />
        </div>
      </div>
    </div>
  );
};
export default Container;
