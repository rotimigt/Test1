//validate email
export function validateEmail(email) {
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email.match(emailPattern);
}
  

// Password validation rules and feedback messages
export const rules = {
  upper: /[A-Z]/,
  lower: /[a-z]/,
  number: /[0-9]/,
  special: /[^A-Za-z0-9]/,
  noSpaces: /\s/,
  length: (pw) => pw.length >= 8
};

export const messages = {
  upper: "At least one uppercase letter is required.",
  lower: "At least one lowercase letter is required.",
  number: "At least one number is required.",
  special: "At least one special character is required.",
  noSpaces: "No spaces are allowed.",
  length: "Minimum 8 characters are required."
};

// Validate password
export function validatePassword(pw) {
  let feedback = [];

  if (!rules.upper.test(pw)) feedback.push(messages.upper);
  if (!rules.lower.test(pw)) feedback.push(messages.lower);
  if (!rules.number.test(pw)) feedback.push(messages.number);
  if (!rules.special.test(pw)) feedback.push(messages.special);
  if (rules.noSpaces.test(pw)) feedback.push(messages.noSpaces);
  if (!rules.length(pw)) feedback.push(messages.length);

  return feedback;
}
