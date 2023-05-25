import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ id, checked }) => {
  const [isChecked, setChecked] = useState(checked);
  const handleChange = () => setChecked(!isChecked);

  return (
    <div className="flex h-6 items-center">
      <input
        id={id}
        aria-describedby="task-title"
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
      />
    </div>
  );
};
Checkbox.propTypes = {
  id: PropTypes.string,
  checked: PropTypes.bool,
};
export default Checkbox;
