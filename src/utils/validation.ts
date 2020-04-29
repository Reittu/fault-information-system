// At least one number, lower case, upper case and a special character. Min length 8, max 255.
const passwordValidator = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$^*.[\]{}()?'"!@#%&/\\,><:;|_~`]).{8,255}/;

// Required to be string for HTML5 validation (pattern)
export const passwordPattern = passwordValidator.toString().slice(1, -1);

export const invalidPasswordMessage =
  'Password should be at least 8 characters long and have at least one lower case, upper case, special character and a number.';