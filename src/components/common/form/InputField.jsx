import React from 'react';
import PropTypes from 'prop-types';

import './inputField.css';

const Input = ({
  type, name, value, id, labelName, ...otherprops
}) => (
  <div className="input-wrap">
    <label htmlFor={id}>{labelName}</label>
    <input
    id={id}
    type={type}
    name={name}
    value={value}
    {...otherprops}
    />
  </div>

);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
export default Input;