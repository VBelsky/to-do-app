import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import Checkbox from '../UI/Checkbox';

const TodoItem = ({ task }) => {
  const { id, title, time, status } = task;
  return (
    <div
      key={id}
      className="relative flex items-center justify-between gap-x-8 rounded-md border border-gray-300 p-4"
    >
      <div className="flex items-start">
        <Checkbox id={id} status={status} />
        <div className="ml-3 text-sm leading-6">
          <label htmlFor={id} className={cx('font-medium text-gray-900', { 'line-through': !status })}>
            {title}
          </label>
          <p className="text-gray-500">{time}</p>
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <TrashIcon className="h-5 w-5 cursor-pointer hover:text-indigo-600" />
        <PencilIcon className="h-5 w-5 cursor-pointer hover:text-indigo-600" />
      </div>
    </div>
  );
};
TodoItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    time: PropTypes.string,
    status: PropTypes.bool,
  }),
};
export default TodoItem;
