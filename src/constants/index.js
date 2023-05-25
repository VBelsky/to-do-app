import { v4 as uuid4 } from 'uuid';

export const PAGE_TITLE = 'Todo List';

export const TODO_FILTER_OPTIONS = [
  { id: uuid4(), name: 'All' },
  { id: uuid4(), name: 'Opened' },
  { id: uuid4(), name: 'Closed' },
];

export const TODO_ITEM_STATUSES = {
  OPENED: true,
  CLOSED: false,
};

export const TODO_LIST_DUMP = [
  {
    id: uuid4(),
    title: 'Task 1',
    time: 'time',
    status: TODO_ITEM_STATUSES.OPENED,
  },
  {
    id: uuid4(),
    title: 'Task 2',
    time: 'time',
    status: TODO_ITEM_STATUSES.CLOSED,
  },
  {
    id: uuid4(),
    title: 'Task 3',
    time: 'time',
    status: TODO_ITEM_STATUSES.OPENED,
  },
];
