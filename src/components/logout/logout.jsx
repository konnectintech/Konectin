import { useState } from "react";
import ActionModal from "../index";
import { logOut } from "../../../assets";

function LogoutModal() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ActionModal
        isOpen={isOpen}
        onClose={closeModal}
        icon={logOut}
        header="Are you sure you want to log out?"
        body="Keep your notifications enabled to stay updated. See you soon!"
        buttonText="Logout"
      />
    </>
  );
}

export default LogoutModal;
