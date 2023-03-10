export function validateField(fieldName, value, stateHolder, stateUpdater) {
  let isValid = stateHolder.formValids[`${fieldName}Valid`];
  let isError = stateHolder.formErrors[`${fieldName}Error`];

  switch (fieldName) {
    case "fullname":
      isValid = value.length >= 7;
      isError = isValid ? "" : "Name should be more than 7 words";
      break;
    case "email":
      isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        ? true
        : false;
      isError = isValid ? "" : "Email is invalid";
      break;
    case "password":
      isValid = value.length >= 6;
      isError = isValid ? "" : "Password is too short";
      break;
    case "confirm_password":
      isValid = value === stateHolder["password"];
      isError = isValid ? "" : "Password must be the same";
      break;
    default:
      break;
  }

  stateUpdater((prev) => ({
    ...prev,
    formErrors: {
      ...prev.formErrors,
      [`${fieldName}Error`]: isError,
    },
    formValids: {
      ...prev.formValids,
      [`${fieldName}Valid`]: isValid,
    },
  }));
}

export function validateForm(validatingObj, formValidUpdater) {
  const validatingArr = Object.entries(validatingObj);
  if (validatingArr.every((val) => val[1] === true)) {
    formValidUpdater(true);
  } else {
    formValidUpdater(false);
  }
}
