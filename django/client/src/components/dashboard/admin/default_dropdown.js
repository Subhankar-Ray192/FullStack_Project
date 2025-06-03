import React, { useState } from "react";
import "../../styles/dashboard/dropdown.css";

const Dropdown = ({ options, placeholder, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div
      className={`dropdown-container ${isOpen ? "open" : ""}`}
      onClick={toggleDropdown}
    >
      <div className="dropdown-selected">
        {value || placeholder}
        <span className="dropdown-arrow">
          <i className="bx bxs-down-arrow"></i>
        </span>
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-option"
              onClick={(e) => {
                e.stopPropagation();
                handleOptionClick(option);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
