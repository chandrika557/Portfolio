import React from "react";

// ============================================
// InputField - Reusable Functional Component
// Handles: text, email, tel, date, number,
//          textarea, select, file inputs
// This is the SMART reusable component!
// ============================================
const InputField = (props) => {
  const {
    label,
    type = "text",
    id,
    name,
    placeholder,
    value,
    onChange,
    options = [],
    rows = 4,
    error,
  } = props;

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>

      {/* If type is textarea → show textarea */}
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows}
        />

      /* If type is select → show dropdown */
      ) : type === "select" ? (
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value || option}>
              {option.label || option}
            </option>
          ))}
        </select>

      /* Otherwise → show normal input */
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={type === "file" ? undefined : value}
          onChange={onChange}
        />
      )}

      {/* Show error message if exists */}
      {error && <p className="error-msg">{error}</p>}
    </div>
  );
};

export default InputField;
