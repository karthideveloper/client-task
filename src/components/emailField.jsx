import { Button, FormControl, InputBase, InputLabel } from "@mui/material";
import "./styles.scss";
import { emailVerifier, textTrimmer } from "../utils/helper-functions";
import { useState } from "react";
const EmailField = ({ onNext, onBack }) => {
  const [values, setValues] = useState({
    email: "",
    pwd: "",
    cnpwd: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    pwd: "",
    cnpwd: "",
  });

  let fieldValid = {
    email: "",
    pwd: "",
    cnpwd: "",
  };
  const handleChange = (prop) => (event) => {
    const newValues = { ...values, [prop]: event.target.value };
    setValues(newValues);
  };
  const fieldValidate = () => {
    fieldValid = {
      email: "",
      pwd: "",
      cnpwd: "",
    };
    fieldValid.email = textTrimmer(values.email)
      ? emailVerifier(values.email)
        ? ""
        : "not a valid text"
      : "not a valid text";
    fieldValid.pwd = textTrimmer(values.pwd)
      ? values.pwd === values.cnpwd
        ? ""
        : "not a valid text"
      : "not a valid text";

    fieldValid.cnpwd = textTrimmer(values.cnpwd)
      ? values.pwd === values.cnpwd
        ? ""
        : "not a valid text"
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
          <InputLabel shrink htmlFor="bootstrap-input" className={errors.email?'err-class':''}>
            Email address*
          </InputLabel>
          <InputBase placeholder="Email address" id="bootstrap-input" onChange={handleChange('email')}/>
        </FormControl>
        <FormControl variant="standard">
          <InputLabel shrink htmlFor="bootstrap-input" className={errors.pwd?'err-class':''}>
            Password*
          </InputLabel>
          <InputBase
            placeholder="Password"
            id="bootstrap-input"
            type="password"
            onChange={handleChange('pwd')}
          />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel shrink htmlFor="bootstrap-input" className={errors.cnpwd?'err-class':''}>
            Confirm password *
          </InputLabel>
          <InputBase
            placeholder="Confirm password"
            id="bootstrap-input"
            type="password"
            onChange={handleChange('cnpwd')}
          />
        </FormControl>
      </div>
      <div className="email-btn-field-wrapper">
        <Button variant="contained" className="back-btn" onClick={onBack}>
          Back
        </Button>
        <Button variant="contained" onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default EmailField;
