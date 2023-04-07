export const textTrimmer = (data) => {
  return data.trim();
};

export const containSpecialChar = (name) => {
  return /^[A-Za-z\s]+$/.test(name);
};

export const numberOnly = (data) => {
  return /^\d+$/.test(data);
};

export const zipCodeValidator = (zipCode) => {
  const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(textTrimmer(zipCode));
  return isValidZip;
};
export const emailVerifier = (emailId) => {
  return /\S+@\S+\.\S+/.test(emailId);
};
