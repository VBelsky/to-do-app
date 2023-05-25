import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

const Button = ({ title, onClickHandler = noop }) => {
  return (
    <button
      type="button"
      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
      onClick={onClickHandler}
    >
      {title}
    </button>
  );
};
Button.propTypes = {
  title: PropTypes.string,
  onClickHandler: PropTypes.func,
};
export default Button;
