import React from "react";
import InputField from "./InputField";
import "./Form.css";

// ============================================
// Form - Class Component (PARENT)
// Has state for all form fields
// Passes handlers down as props to InputField
// ============================================
class Form extends React.Component {

  // state = {} class property syntax
  // stores all form field values
  state = {
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    policyType: "",
    ownershipType: "",
    coverageOptions: [],
    numEmployees: "",
    businessDescription: "",
    uploadedFile: null,
    hasPreviousInsurance: false,
    errors: {},
    submitted: false,
  };

  // Options for dropdowns and lists
  businessOwnershipTypes = [
    "Sole Proprietor",
    "Partnership",
    "Corporation",
    "LLC",
  ];

  coverageOptionsList = [
    "Property Damage",
    "Liability Coverage",
    "Equipment Breakdown",
    "Cyber Protection",
  ];

  policyTypeOptions = [
    { value: "", label: "Select policy type" },
    { value: "health", label: "Health Insurance" },
    { value: "auto", label: "Auto Insurance" },
    { value: "home", label: "Home Insurance" },
    { value: "life", label: "Life Insurance" },
    { value: "travel", label: "Travel Insurance" },
  ];

  // ============================================
  // Arrow function handlers (class properties)
  // No bind needed - same as your IndecisionApp!
  // ============================================

  // Handles text/email/tel/date/number/select inputs
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState(() => ({ [name]: value }));
  };

  // Handles radio button selection
  handleRadioChange = (e) => {
    this.setState(() => ({ ownershipType: e.target.value }));
  };

  // Handles checkboxes - add or remove from array
  handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    this.setState((prevState) => {
      if (checked) {
        // Add to coverage array
        return {
          coverageOptions: [...prevState.coverageOptions, value],
        };
      } else {
        // Remove from coverage array
        return {
          coverageOptions: prevState.coverageOptions.filter(
            (opt) => opt !== value
          ),
        };
      }
    });
  };

  // Handles file upload
  handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      this.setState(() => ({ uploadedFile: file }));
    }
  };

  // Handles toggle switch
  handleToggle = () => {
    this.setState((prevState) => ({
      hasPreviousInsurance: !prevState.hasPreviousInsurance,
    }));
  };

  // Validates form fields before submit
  validateForm = () => {
    const errors = {};
    const { fullName, email, phone, policyType } = this.state;

    if (!fullName.trim()) errors.fullName = "Full name is required";
    if (!email.trim()) errors.email = "Email is required";
    else if (!email.includes("@")) errors.email = "Enter a valid email";
    if (!phone.trim()) errors.phone = "Phone number is required";
    if (!policyType) errors.policyType = "Please select a policy type";

    return errors;
  };

  // Handles form submit - like AddOption in IndecisionApp!
  handleSubmit = (e) => {
    e.preventDefault(); // stops page refresh

    const errors = this.validateForm();

    if (Object.keys(errors).length > 0) {
      this.setState(() => ({ errors }));
      return;
    }

    // Save to localStorage on submit
    localStorage.setItem(
      "insuranceSubmission",
      JSON.stringify({
        fullName: this.state.fullName,
        email: this.state.email,
        policyType: this.state.policyType,
        submittedAt: new Date().toISOString(),
      })
    );

    this.setState(() => ({ submitted: true, errors: {} }));
    console.log("Form submitted!", this.state);
  };

  // Save draft to localStorage
  handleSaveDraft = () => {
    localStorage.setItem(
      "insuranceDraft",
      JSON.stringify({
        fullName: this.state.fullName,
        email: this.state.email,
        phone: this.state.phone,
        policyType: this.state.policyType,
      })
    );
    alert("Draft saved successfully!");
  };

  // Resets the entire form
  handleCancel = () => {
    this.setState(() => ({
      fullName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      policyType: "",
      ownershipType: "",
      coverageOptions: [],
      numEmployees: "",
      businessDescription: "",
      uploadedFile: null,
      hasPreviousInsurance: false,
      errors: {},
      submitted: false,
    }));
  };

  // Load draft from localStorage when component mounts
  // same as componentDidMount in IndecisionApp!
  componentDidMount() {
    try {
      const json = localStorage.getItem("insuranceDraft");
      const draft = JSON.parse(json);
      if (draft) {
        this.setState(() => ({
          fullName: draft.fullName || "",
          email: draft.email || "",
          phone: draft.phone || "",
          policyType: draft.policyType || "",
        }));
      }
    } catch (e) {
      // do nothing
    }
  }

  render() {
    const {
      fullName, email, phone, dateOfBirth, policyType,
      ownershipType, coverageOptions, numEmployees,
      businessDescription, uploadedFile, hasPreviousInsurance,
      errors, submitted,
    } = this.state;

    // Show success screen after submit
    if (submitted) {
      return (
        <div className="form-container success-container">
          <div className="success-icon">✅</div>
          <h2 className="success-title">Application Submitted!</h2>
          <p className="success-msg">
            Thank you, {fullName}! We'll contact you at {email} shortly.
          </p>
          <button className="submit-btn" onClick={this.handleCancel}>
            Submit Another
          </button>
        </div>
      );
    }

    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <h2>Customer Information</h2>

        {/* ---- Personal Details ---- */}
        <InputField
          type="text"
          label="Full Name"
          id="fullName"
          name="fullName"
          placeholder="Enter full name"
          value={fullName}
          onChange={this.handleInputChange}
          error={errors.fullName}
        />

        <InputField
          type="email"
          label="Email Address"
          id="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={this.handleInputChange}
          error={errors.email}
        />

        <InputField
          type="tel"
          label="Phone Number"
          id="phone"
          name="phone"
          placeholder="(555) 123-4567"
          value={phone}
          onChange={this.handleInputChange}
          error={errors.phone}
        />

        <InputField
          type="date"
          label="Date of Birth"
          id="dateOfBirth"
          name="dateOfBirth"
          value={dateOfBirth}
          onChange={this.handleInputChange}
        />

        <InputField
          type="select"
          label="Policy Type"
          id="policyType"
          name="policyType"
          value={policyType}
          onChange={this.handleInputChange}
          options={this.policyTypeOptions}
          error={errors.policyType}
        />

        {/* ---- Business Ownership - Radio Buttons ---- */}
        <label>Business Ownership Type</label>
        <div className="radio-group">
          {this.businessOwnershipTypes.map((type, index) => (
            <label key={index} className="radio-option">
              <input
                type="radio"
                name="ownershipType"
                value={type}
                checked={ownershipType === type}
                onChange={this.handleRadioChange}
              />
              {type}
            </label>
          ))}
        </div>

        {/* ---- Coverage Options - Checkboxes ---- */}
        <label>Coverage Options</label>
        <div className="checkbox-group">
          {this.coverageOptionsList.map((option, index) => (
            <label key={index} className="checkbox-option">
              <input
                type="checkbox"
                value={option}
                checked={coverageOptions.includes(option)}
                onChange={this.handleCheckboxChange}
              />
              {option}
            </label>
          ))}
        </div>

        {/* ---- Number of Employees ---- */}
        <InputField
          type="number"
          label="Number of Employees"
          id="numEmployees"
          name="numEmployees"
          placeholder="0"
          value={numEmployees}
          onChange={this.handleInputChange}
        />

        {/* ---- Business Description ---- */}
        <InputField
          type="textarea"
          label="Business Description"
          id="businessDescription"
          name="businessDescription"
          placeholder="Describe your business..."
          value={businessDescription}
          onChange={this.handleInputChange}
          rows={4}
        />

        {/* ---- File Upload ---- */}
        <div className="form-group">
          <label htmlFor="documents">Upload Supporting Documents</label>
          <div className="file-upload-area" onClick={() => document.getElementById('documents').click()}>
            <p className="upload-icon">⬆</p>
            <p className="upload-text">Click to upload or drag and drop</p>
            <p className="upload-hint">PDF, DOC, DOCX (max. 10MB)</p>
            {uploadedFile && (
              <p className="upload-success">✅ {uploadedFile.name}</p>
            )}
            <input
              id="documents"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={this.handleFileChange}
              style={{ display: "none" }}
            />
          </div>
        </div>

        {/* ---- Previous Insurance Toggle ---- */}
        <div className="insurance-check">
          <label>Do you have previous insurance?</label>
          <div
            className={hasPreviousInsurance ? "toggle-switch toggle-on" : "toggle-switch"}
            onClick={this.handleToggle}
          >
            <div className="toggle-thumb" />
          </div>
        </div>

        <hr />

        {/* ---- Action Buttons ---- */}
        <div className="form-buttons">
          <button type="button" className="cancel-btn" onClick={this.handleCancel}>
            Cancel
          </button>
          <button type="button" className="save-draft-btn" onClick={this.handleSaveDraft}>
            Save Draft
          </button>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
