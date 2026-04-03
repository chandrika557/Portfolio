import React from "react";
import InputField from "../InputField";
import "./Form.css";

const Form = () => {
  const business_Ownership_Type = [
    "Sole Proprietor",
    "Partnership",
    "Corporation",
    "LLC",
  ];

  const covereage_Options = [
    "Property Damage",
    "Liability Coverage",
    "Equipment Breakdown",
    "Cyber Protection",
  ];

  const policyTypeOptions = [
    "Select options",
    "Personal",
    "Business",
    "Health",
    "Auto",
  ];

  return (
    <form className="form-container">
      <h2>Customer Information</h2>

      <InputField
        type="text"
        label="Full Name"
        id="fullname"
        placeholder="Enter full name"
      />

      <InputField
        type="email"
        label="Email Address"
        id="email"
        placeholder="Enter email"
      />

      <InputField
        type="tel"
        label="Phone Number"
        id="phone"
        placeholder="(555) 123-4567"
      />

      <InputField type="date" label="Date of Birth" id="dob" />

      <InputField
        type="select"
        label="Policy Type"
        id="policyType"
        options={policyTypeOptions}
      />

      <label>Business Ownership Type</label>
      <div className="radio-group">
        {business_Ownership_Type.map((type, index) => (
          <label key={index} className="radio-option">
            <input type="radio" name="ownership" /> {type}
          </label>
        ))}
      </div>

      <label>Coverage Options</label>
      <div className="checkbox-group">
        {covereage_Options.map((coverage, index) => (
          <label key={index} className="checkbox-option">
            <input type="checkbox" /> {coverage}
          </label>
        ))}
      </div>

      <InputField
        type="number"
        label="Number of Employees"
        id="employees"
        placeholder="0"
      />

      <InputField
        type="textarea"
        label="Business Description"
        id="desc"
        placeholder="Describe your business"
        rows={100}
        cols={500}
      />

      <InputField
        type="file"
        label="Upload Supporting Documents"
        id="documents"
      />

      <div className="insurance-check">
        <label htmlFor="insurance">Do you have previous insurance?</label>
        <input type="checkbox" id="insurance" />
      </div>

      <hr />

      <div className="form-buttons">
        <button type="button" className="cancel-btn">
          Cancel
        </button>
        <button type="button" className="save-draft-btn">
          Save Draft
        </button>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
