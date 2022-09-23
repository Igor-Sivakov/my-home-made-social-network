export const required = (values) => {
  if (values) return undefined;
  return 'Field is required';
};

export const minMaxLengthCreator = (minLength, maxLength) => (values) => {
  if (values.length < minLength) {
    return `Min length is ${minLength} symbols`;
  } else if (values.length > maxLength) {
    return `Max length is ${maxLength} symbols`;
  }
  return undefined;
};

export const norequired = (values) => {
  if (values) return undefined;
  return ' ';
};
