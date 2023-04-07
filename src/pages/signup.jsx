import "../scss/index.scss";
import logo from "../assets/icons/KineticLogo.png";
import logoText from "../assets/icons/KineticText.png";
import NameField from "../components/nameField";
import EmailField from "../components/emailField";
import AddressField from "../components/addressFiled";
import RoleField from "../components/roleFiled";
import { MobileStepper } from "@mui/material";
import { useState } from "react";
const SignUp = () => {
 
  const [step, setStep] = useState(0);
  const onBack = () => {
    setStep(step - 1);
  };
  const onNext = () => {
    setStep(step + 1);
  };
  const component = [
    <NameField onNext={onNext} />,
    <EmailField onNext={onNext} onBack={onBack} />,
    <RoleField onNext={onNext} onBack={onBack} />,
    <AddressField onNext={onNext} onBack={onBack} />,
  ];
  return (
    <div className="main-container">
      <div className="container">
        <div className="head-wrapper">
          <div className="logo-wrapper">
            <img src={logo} alt="logo" />
            <img src={logoText} alt="logo-txt" />
          </div>
          <p className="title-text">Sign Up & Start Your Free Trial</p>
        </div>
        <div className="dy-comp">{component[step]}</div>
        <div className="login-text">
          Already have an account? <span className="link-text">Login</span>
        </div>
        <div>
          <MobileStepper steps={4} position="static" activeStep={step} />
        </div>
      </div>
    </div>
  );
};
export default SignUp;
