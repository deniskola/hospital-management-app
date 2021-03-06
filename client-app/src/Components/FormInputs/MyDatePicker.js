import {useField} from "formik";
import React from "react";
import {Form, Label} from "semantic-ui-react";

export default function MyDateInput(props) {
  const [field, meta] = useField(props.name);
  return (
    <Form.Field
      style={{marginBottom: "10px"}}
      error={meta.touched && !!meta.error}
    >
      <label>{props.label}</label>
      <Form.Input {...field} {...props} />
      {meta.touched && meta.error ? (
        <Label basic color="red">
          {meta.error}
        </Label>
      ) : null}
    </Form.Field>
  );
}
