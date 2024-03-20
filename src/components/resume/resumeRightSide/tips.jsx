import React from "react";

function Tips() {
  return (
    <div className="flex flex-col gap-3 bg-primary-500 text-white absolute -top-2  right-14 p-6 rounded z-50">
      <div className="absolute -right-2 bg-primary-500 rotate-45 top-4 w-4 h-4 " />

      <div className="text-base">
        Crafting an impressive basic info section? Follow these key tips:
      </div>
      <ol className="list-decimal">
        <li className="whitespace-nowrap text-xs ">
          Ensure up-to-date contact information.
        </li>
        <li className="whitespace-nowrap text-xs ">
          Include full name, phone number, and professional email.
        </li>
      </ol>
    </div>
  );
}

export default Tips;
