import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onBlur={(event) => {
          setState(event.target.value);
        }}
        onChange={(event) => {
          setState(event.target.value);
        }}
        disabled={options.length === 0}
      >
        <option>All</option>
        {options.map((obj) => (
          <option key={obj} value={obj}>
            {obj}
          </option>
        ))}
      </select>
    </label>
  );

  return [state, Dropdown, setState];
};

export default useDropdown;
