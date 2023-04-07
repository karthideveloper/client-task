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
const AddressField = ({ onNext, onBack }) => {
  const [values, setValues] = useState({
    country: "",
    zipCode: "",
    street: "",
    street2: "",
    city: "",
    state: "",
  });

  const [errors, setErrors] = useState({
    country: "",
    zipCode: "",
  });

  let fieldValid = {
    country: "",
    zipCode: "",
  };
  const handleChange = (prop) => (event) => {
    const newValues = { ...values, [prop]: event.target.value };
    setValues(newValues);
  };
  const fieldValidate = () => {
    fieldValid = {
      country: "",
      zipCode: "",
    };
    fieldValid.country = textTrimmer(values.country) ? "" : "not a valid text";
    fieldValid.zipCode = textTrimmer(values.zipCode) ? "" : "not a valid text";
    setErrors(fieldValid);
    return Object.values(fieldValid).every((x) => x === "");
  };
  const handleNext = () => {
    fieldValidate();
  };
  return (
    <div className="name-field-wrapper">
      <div className="text-field-wrapper">
        <FormControl variant="standard">
          <InputLabel shrink htmlFor="bootstrap-input">
            Street
          </InputLabel>
          <InputBase
            placeholder="Street"
            id="bootstrap-input"
            onChange={handleChange("street")}
          />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel shrink htmlFor="bootstrap-input">
            Street 2
          </InputLabel>
          <InputBase
            placeholder="Street 2"
            id="bootstrap-input"
            onChange={handleChange("street2")}
          />
        </FormControl>
        <div className="city-container">
          <FormControl variant="standard">
            <InputLabel shrink htmlFor="bootstrap-input">
              City
            </InputLabel>
            <InputBase
              placeholder="City"
              id="bootstrap-input"
              onChange={handleChange("city")}
            />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel shrink htmlFor="bootstrap-input">
              State / Province
            </InputLabel>
            <InputBase
              placeholder="State / Province"
              id="bootstrap-input"
              onChange={handleChange("state")}
            />
          </FormControl>
        </div>
        <FormControl variant="standard">
          <InputLabel
            shrink
            htmlFor="bootstrap-input"
            className={errors.country ? "err-class" : ""}
          >
            Country*
          </InputLabel>
          <Select
            label="Country "
            labelId="Country-simple-select-label"
            id="Country-simple-select"
            onChange={handleChange("country")}
          >
            <MenuItem value={"India"}>India</MenuItem>
            <MenuItem value={"America"}>America</MenuItem>
            <MenuItem value={"Japan"}>Japan</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard">
          <InputLabel
            shrink
            htmlFor="bootstrap-input"
            className={errors.zipCode ? "err-class" : ""}
          >
            Zip / Postal Code*
          </InputLabel>
          <InputBase
            placeholder="Zip / Postal Code*"
            id="bootstrap-input"
            onChange={handleChange("zipCode")}
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

export default AddressField;
