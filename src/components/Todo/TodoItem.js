import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import Checkbox from '../UI/Checkbox';
import { TODO_ITEM_STATUSES } from '../../constants';

const TodoItem = ({ task, taskDeleteHandler }) => {
  const { id, title, time, status, checked } = task;
  return (
    <div
      key={id}
      className="relative flex items-center justify-between gap-x-8 rounded-md border border-gray-300 p-4"
    >
      <div className="flex items-start">
        <Checkbox id={id} checked={checked} />
        <div className="ml-3 text-sm leading-6">
          <label
            htmlFor={id}
            className={cx('font-medium text-gray-900', {
              'line-through': status === TODO_ITEM_STATUSES.CLOSED,
            })}
          >
            {title}
          </label>
          <p className="text-gray-500">{time}</p>
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <TrashIcon
          className="h-5 w-5 cursor-pointer hover:text-indigo-600"
          onClick={() => taskDeleteHandler(id)}
        />
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
    status: PropTypes.string,
    checked: PropTypes.bool,
  }),
  taskDeleteHandler: PropTypes.func,
};
export default TodoItem;
