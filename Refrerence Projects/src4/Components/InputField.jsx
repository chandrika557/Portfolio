import React from "react";

const InputField = (props) => {
  const {
    label,
    type = "text",
    id,
    placeholder,
    options = [],
    rows = 4,
    cols = 4,
  } = props;

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {type === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          rows={rows}
          cols={cols}
        ></textarea>
      ) : type === "select" ? (
        <select id={id}>
          {options.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
      ) : (
        <input type={type} id={id} placeholder={placeholder} />
      )}
    </div>
  );
};

export default InputField;
