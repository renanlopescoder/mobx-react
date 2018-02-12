const removeJsonEmptyFields = (obj) => {
  Object.keys(obj).forEach((k) => (!obj[k] && obj[k] !== undefined) && delete obj[k]);
  return obj;
};

export default removeJsonEmptyFields;
