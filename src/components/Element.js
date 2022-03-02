import React from "react";
import Input from "./elements/Input";
const Element = ({ field: { id, text, field_placeholder, field_value } }) => {
  return (
    <Input
      id={id}
      text={text}
      field_placeholder={field_placeholder}
      field_value={field_value}
    />
  );
};

export default Element;
