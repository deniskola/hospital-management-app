import {useField} from "formik";
import React from "react";
import {Form, Label, Dropdown} from "semantic-ui-react";

export default function MySelectInput(props) {
  const [field, meta, helpers] = useField(props.name);
  return (
    <Form.Field
      style={{marginBottom: "10px"}}
      error={meta.touched && !!meta.error}
    >
      <label>{props.label}</label>
      <Dropdown
        clearable
        search
        selection
        options={props.options}
        value={field.value || null}
        onChange={(e, d) => helpers.setValue(d.value)}
        onBlur={() => helpers.setTouched(true)}
        placeholder={props.placeholder}
      />
      {meta.touched && meta.error ? (
        <Label basic color="red">
          {meta.error}
        </Label>
      ) : null}
    </Form.Field>
  );
}
