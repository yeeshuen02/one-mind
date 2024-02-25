import { useState } from "react";

export default function Question({ ques, options, saveOptionselected }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    saveOptionselected(index);
  };

  return (
    <div className="phq-ques">
      <p>{ques}</p>
      <ul>
        {options.map((options, index) => (
          <li
            key={index}
            className={index == selectedOption ? "option-active" : "option"}
            onClick={() => handleOptionClick(index)}
          >
            {options}
          </li>
        ))}
      </ul>
    </div>
  );
}
