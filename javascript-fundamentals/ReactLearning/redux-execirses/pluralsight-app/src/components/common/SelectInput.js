import React from 'react';
import propTypes from 'prop-types'

const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        {/* Note, value is set here rather than on the option - docs: https://facebook.github.io/react/docs/forms.html */}
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="form-control">
          <option value="">{defaultOption}</option>
          {options.map((option) => {
            return <option key={option.value} value={option.value}>{option.text}</option>;
          })
          }
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  defaultOption: propTypes.string,
  value: propTypes.string,
  error: propTypes.string,
  options: propTypes.arrayOf(propTypes.object)
};

export default SelectInput;
