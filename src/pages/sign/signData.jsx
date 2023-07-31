import * as MdIcons from "react-icons/md";

export const signUpForm = [
  {
    id: "fullname",
    icon: (
      <MdIcons.MdPerson
        className="absolute -translate-y-1/2 top-1/2 right-3 pb-2"
        color="#242424"
        size="1.7rem"
      />
    ),
    legend: "Full Name",
    placeholder: "John Doe John",
    type: "text",
  },
  {
    id: "email",
    icon: (
      <MdIcons.MdAlternateEmail
        className="absolute -translate-y-1/2 top-1/2 right-3 pb-2"
        color="#242424"
        size="1.7rem"
      />
    ),
    legend: "E-mail",
    placeholder: "JohnDaneJohn@gmail.com",
    type: "email",
  },
  {
    id: "password",
    icon: (
      <MdIcons.MdLock
        className="absolute -translate-y-1/2 top-1/2 right-3 pb-1"
        color="#242424"
        size="1.5rem"
      />
    ),
    legend: "Password",
    placeholder: "Minimum of 8 characters",
    type: "password",
  },
  {
    id: "confirm_password",
    icon: (
      <MdIcons.MdLock
        className="absolute -translate-y-1/2 top-1/2 right-3 pb-1"
        color="#242424"
        size="1.5rem"
      />
    ),
    legend: "Confirm Password",
    placeholder: "Minimum of 8 characters",
    type: "password",
  },
];

export const loginForm = [
  {
    id: "email",
    icon: (
      <MdIcons.MdPerson
        className="absolute -translate-y-1/2 top-1/2 right-3 pb-2"
        color="#242424"
        size="1.7rem"
      />
    ),
    legend: "Email",
    placeholder: "JohnDoe122@gmail.com",
    type: "email",
  },
  {
    id: "password",
    icon: (
      <MdIcons.MdLock
        className="absolute -translate-y-1/2 top-1/2 right-3 pb-1"
        color="#242424"
        size="1.5rem"
      />
    ),
    legend: "Password",
    placeholder: "Minimum of 8 characters",
    type: "password",
  },
];
