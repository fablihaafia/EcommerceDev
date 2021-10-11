import React from "react";
import FormInputTextArea from "./FormInputTextArea";
import FormLabel from "./FormLabel";

const FormInput = (props) => {
  const isNormalTextInput = () => {
    const isTextInput =
      props.type === "text" || props.type === "number" || props.type === "email"
        ? true
        : false;
    return isTextInput;
  };

  return (
    <>
      <div className="container">
        <div className="form-group">
          <FormLabel id={props.name} label={props.label} />

          {isNormalTextInput() ? (
            <input
              type={props.type}
              value={props.value}
              className="form-control"
              id={props.name}
              placeholder={props.label}
              onChange={(event) => props.setValue(event.target.value)}
            />
          ) : (
            ""
          )}

          {props.type === "textarea" && <FormInputTextArea props={props} />}
        </div>
      </div>
    </>
  );
};

export default FormInput;
