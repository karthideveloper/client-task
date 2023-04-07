import {
  Button,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import "./styles.scss";
import { textTrimmer } from "../utils/helper-functions";
import { useState } from "react";
const RoleField = ({ onNext, onBack }) => {
  const [values, setValues] = useState({
    role: "",
    firm: "",
  });

  const [errors, setErrors] = useState({
    role: "",
    firm: "",
  });

  let fieldValid = {
    role: "",
    firm: "",
  };
  const handleChange = (prop) => (event) => {
    const newValues = { ...values, [prop]: event.target.value };
    setValues(newValues);
  };
  const fieldValidate = () => {
    fieldValid = {
      role: "",
      firm: "",
    };
    fieldValid.role = textTrimmer(values.role) ? "" : "not a valid text";
    fieldValid.firm = textTrimmer(values.firm) ? "" : "not a valid text";
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
          <InputLabel shrink htmlFor="bootstrap-input" className={errors.role?'err-class':''}>
            Role*
          </InputLabel>
          <Select
            label="Role "
            labelId="Role-label"
            id="Role"
            onChange={handleChange("role")}
          >
            <MenuItem value={"Senior"}>Senior</MenuItem>
            <MenuItem value={"Junior"}>Junior</MenuItem>
            <MenuItem value={"Lead"}>Lead</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard">
          <InputLabel shrink htmlFor="bootstrap-input" className={errors.firm?'err-class':''}>
            Select your firm*
          </InputLabel>
          <Select
            label="Select your firm "
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={handleChange("firm")}
          >
            <MenuItem value={"1 Tier"}>1 Tier</MenuItem>
            <MenuItem value={"2 Tier"}>2 Tier</MenuItem>
            <MenuItem value={"3 Tier"}>3 Tier</MenuItem>
          </Select>
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

export default RoleField;
