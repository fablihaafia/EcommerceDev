import React from "react";

const FormInputTextArea = (props) => {
  return (
    <textarea
      value={props.value}
      className="form-control"
      id={props.name}
      placeholder={props.label}
      onChange={(event) => props.setValue(event.target.value)}
    ></textarea>
  );
};

export default FormInputTextArea;
