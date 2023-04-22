import "./module.css";
import { useState } from "react";
const Select = ({ filter, handleFilterChange }) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="filter-select">
      <div
        className="selected-option"
        onClick={() => setShowOptions(!showOptions)}
      >
        {filter ? filter : "Filter by Region"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#aaa"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      {showOptions && (
        <ul className="options">
          <li
            onClick={() => {
              handleFilterChange("Africa");
              setShowOptions(!showOptions);
            }}
          >
            Africa
          </li>
          <li
            onClick={() => {
              handleFilterChange("America");
              setShowOptions(!showOptions);
            }}
          >
            America
          </li>
          <li
            onClick={() => {
              handleFilterChange("Asia");
              setShowOptions(!showOptions);
            }}
          >
            Asia
          </li>
          <li
            onClick={() => {
              handleFilterChange("Europe");
              setShowOptions(!showOptions);
            }}
          >
            Europe
          </li>
          <li
            onClick={() => {
              handleFilterChange("Oceania");
              setShowOptions(!showOptions);
            }}
          >
            Oceania
          </li>
        </ul>
      )}
    </div>
  );
};
export default Select;
