import { useEffect, useState } from "react";
import { validateField, validateForm } from "./validator";

function NotifyForm({ handleSubmit, formFor, errorState, errorMessage }) {
  const [mail, setMail] = useState({
    formValids: { emailValid: false },
    formErrors: { emailError: "" },
  });
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    validateForm(mail.formValids, setFormValid);
  }, [mail]);

  const handleFormInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMail((prev) => ({ ...prev, [name]: value }));
    validateField(name, value, mail, setMail, setFormValid);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formReq = new FormData(event.target);
    const formResult = formReq.get(email);

    handleSubmit(formResult);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="mt-2 w-full flex flex-col gap-4 text-sm font-normal"
    >
      <div className="relative">
        <input
          className="w-full rounded-lg px-3 py-4 text-black border-secondary-300 border-2 outline-0"
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email address"
          value={mail?.email || ""}
          onChange={(event) => handleFormInput(event)}
          onInput={(event) => handleFormInput(event)}
        />
        <button
          disabled={!formValid}
          className={`${
            !formValid ? "bg-secondary-300" : "bg-secondary-500 text-white"
          } rounded-md py-2 px-6 w-max absolute -translate-y-1/2 top-1/2 right-3 text-xs`}
        >
          {formFor}
        </button>
      </div>
      <p className="text-start w-full text-red-500 mt-1 cursor-text bg-transparent">
        {mail.formErrors[`${mail.id}Error`]}
      </p>
      {errorState ? (
        <p className="text-red-600">{errorMessage}</p>
      ) : (
        <p className="text-start w-full text-red-500 mt-1 cursor-text bg-transparent">
          {mail.formErrors[`${mail.id}Error`]}
        </p>
      )}
    </form>
  );
}

export default NotifyForm;
