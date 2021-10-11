import React from "react";

const FormLabel = ({ id, label }) => {
  return <label htmlFor={id} style={{ color: 'red' }}>{label}</label>;
};

export default FormLabel;
