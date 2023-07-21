import { useEffect, useState } from "react";
import { validateField, validateForm } from "./validator";

function NotifyForm({ handleSubmit, formFor }) {
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
    validateField(name, value, mail, setMail);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formReq = new FormData(event.target);
    const formResult = formReq.get("email");

    handleSubmit(formResult);
    setTimeout(() => {
      setMail({
        [formFor]: "",
        formValids: { emailValid: false },
        formErrors: { emailError: "" },
      });
    }, 1000);
  };

  return (
    <form onSubmit={submitHandler} className="w-full text-sm font-normal">
      <label
        htmlFor={formFor}
        className="w-full rounded-lg flex gap-2 items-center justify-center"
      >
        <input
          className="outline-0 border-0 text-sm md:text-md flex-1 text-primary-900"
          id={formFor}
          name="email"
          type="email"
          placeholder="Enter your email address"
          value={mail?.email ? mail.email : ""}
          onChange={(event) => handleFormInput(event)}
          onInput={(event) => handleFormInput(event)}
        />
        <button
          disabled={!formValid}
          className={`${
            !formValid ? "bg-secondary-300" : "bg-secondary-500"
          } px-2 text-sm md:text-md sm:px-6 py-2 text-white text-center rounded-md w-28`}
        >
          {formFor}
        </button>
      </label>
    </form>
  );
}

export default NotifyForm;
