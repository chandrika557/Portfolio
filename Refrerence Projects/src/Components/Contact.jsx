import React from "react";
import { useParams } from "react-router-dom";
import './Styles.scss';

const Contact = () => {
  const { id } = useParams();
  return (
    <div>
      <div className="page">
        <h1>Contact Page</h1>
        <p>Contact us here.</p>
        <p>Contact ID {id}</p>
      </div>
    </div>
  );
};

export default Contact;
