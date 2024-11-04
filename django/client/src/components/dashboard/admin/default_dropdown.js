import React, { useState } from "react";
import "../../styles/dashboard/dropdown.css";

const Dropdown = ({ options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(placeholder);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div
      className={`dropdown-container ${isOpen ? "open" : ""}`}
      onClick={toggleDropdown}
    >
      <div className="dropdown-selected">
        {selectedOption}
        {/* Down arrow icon */}
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
              onClick={() => handleOptionClick(option)}
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
