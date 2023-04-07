import { Button, FormControl, InputBase, InputLabel } from "@mui/material";
import "./styles.scss";
import { useState } from "react";
import { textTrimmer } from "../utils/helper-functions";
const NameField = ({ onNext }) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
  });

  let fieldValid = {
    firstName: "",
    lastName: "",
  };
  const handleChange = (prop) => (event) => {
    const newValues = { ...values, [prop]: event.target.value };
    setValues(newValues);
  };
  const fieldValidate = () => {
    fieldValid = {
      firstName: "",
      lastName: "",
    };
    fieldValid.firstName = textTrimmer(values.firstName)
      ? ""
      : "not a valid text";
    fieldValid.lastName = textTrimmer(values.lastName)
      ? ""
      : "not a valid text";
    setErrors(fieldValid);
    return Object.values(fieldValid).every((x) => x === "");
  };
  const handleNext = () => {
    if (fieldValidate()) {
      onNext();
    } 
  };

  return (
    <div className="name-field-wrapper">
      <div className="text-field-wrapper">
        <FormControl variant="standard">
          <InputLabel shrink htmlFor="bootstrap-input" className={errors.firstName?'err-class':''}>
            First Name*
          </InputLabel>
          <InputBase
            placeholder="First Name "
            id="bootstrap-input"
            value={values.firstName}
            onChange={handleChange("firstName")}
          />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel shrink htmlFor="bootstrap-input" className={errors.lastName?'err-class':''}>
            Last Name*
          </InputLabel>
          <InputBase
            placeholder="Last Name "
            id="bootstrap-input"
            value={values.lastName}
            onChange={handleChange("lastName")}
          />
        </FormControl>
      </div>
      <div className="btn-field-wrapper">
        <Button variant="contained" fullWidth onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default NameField;
