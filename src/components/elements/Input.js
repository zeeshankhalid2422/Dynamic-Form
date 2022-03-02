import React, { useContext } from "react";
import { FormContext } from "../../FormContext";

const Input = ({ id, text, field_placeholder, field_value }) => {
  const { handleChange } = useContext(FormContext);
  return (
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        {text}
      </label>
      <input
        type="text"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder={field_placeholder ? field_placeholder : ""}
        value={field_value}
        onChange={(event) => handleChange(id, event)}
      />
    </div>
  );
};

export default Input;
