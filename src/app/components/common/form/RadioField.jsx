import React from "react";
import PropTypes from "prop-types";

export default function RadioField({ options, label, name, onChange, value }) {
  const handleChange = ({ target }) => {
    onChange({ name: [target.name], value: target.value });
  };

  return (
    <div className="mb-4">
      <label className="form-label">{label}</label>
      <div>
        {options.map((option) => (
          <div key={option.name + "_" + option.value} className="form-check form-check-inline">
            <input
              className="form-check-input"
              name={name}
              type="checkbox"
              id={option.name + "_" + option.value}
              value={option.value}
              checked={option.value === value}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              {option.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

RadioField.propTypes = {
  options: PropTypes.array,
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};
