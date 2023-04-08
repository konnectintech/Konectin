import { useEffect, useState } from "react";
import * as MdIcons from "react-icons/md";
import { googleIcon } from "../../assets";
import { CustomButton } from "../button";
import { ErrorModal } from "./modal";
import { validateField, validateForm } from "./validator";

function FieldForm({
  handleSubmit,
  params,
  formFor,

  errorMessage,
  children,
}) {
  const [mail, setMail] = useState({
    formValids: {},
    formErrors: {},
  });
  const [passType, setPassType] = useState({
    password: "password",
    confirm_password: "password",
  });
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    for (let i = 0; i < params.length; i++) {
      setMail((prev) => ({
        ...prev,
        [params[i].id]: "",
        formErrors: {
          ...prev.formErrors,
          [`${params[i].id}Error`]: "",
        },
        formValids: {
          ...prev.formValids,
          [`${params[i].id}Valid`]: false,
        },
      }));
    }
  }, []);

  useEffect(() => {
    validateForm(mail.formValids, setFormValid);
  }, [mail]);

  const handleFormInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMail((prev) => ({ ...prev, [name]: value }));
    validateField(name, value, mail, setMail, setFormValid);
  };

  const togglePassType = (type) => {
    setPassType((prev) => ({
      ...prev,
      [type]: prev[type] === "password" ? "text" : "password",
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formReq = new FormData(event.target);
    const formArray = {};

    for (let i = 0; i < params.length; i++) {
      const name = params[i].id;
      const value = formReq.get(name);
      formArray[name] = value;
    }
    handleSubmit(formArray);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="w-full flex flex-col mt-2 items-stretch text-xs md:text-sm gap-6"
    >
      {errorMessage && <ErrorModal text={errorMessage} />}
      <div className="flex flex-col gap-4">
        {params?.map((formField, index) => (
          <div key={index}>
            <fieldset className="border border-secondary-300 rounded-md cursor-pointer relative">
              <legend className="ml-4 px-1">{formField.legend}</legend>
              <input
                className="w-full text-xs bg-transparent border-0 outline-0 px-4 pt-2 pb-3"
                id={formField.id}
                name={formField.id}
                type={
                  formField.type === "password"
                    ? passType[formField.id]
                    : formField.type
                }
                placeholder={formField.placeholder}
                value={mail[formField.id] || ""}
                onChange={(event) => handleFormInput(event)}
                onInput={(event) => handleFormInput(event)}
              />
              <label
                onClick={() =>
                  formField.type === "password"
                    ? togglePassType(formField.id)
                    : null
                }
                className="cursor-pointer"
                htmlFor={formField.id}
              >
                {passType[formField.id] === "password" ? (
                  <MdIcons.MdLockOpen
                    className="absolute -translate-y-1/2 top-1/2 right-3 pb-1"
                    color="#242424"
                    size="1.5rem"
                  />
                ) : (
                  formField.icon
                )}
              </label>
            </fieldset>
            <p className="text-start w-full text-red-500 mt-1 cursor-text bg-transparent">
              {mail.formErrors[`${formField.id}Error`]}
            </p>
          </div>
        ))}
      </div>
      {children}
      <div className="text-center flex flex-col gap-2">
        <CustomButton disabled={!formValid} primary={true} colorType="primary">
          {formFor}
        </CustomButton>
        or
        <CustomButton>
          <img src={googleIcon} alt="continue with google" /> Continue with
          Google
        </CustomButton>
      </div>
    </form>
  );
}

export default FieldForm;
