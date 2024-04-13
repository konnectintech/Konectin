import { Outlet } from "react-router-dom";

import React from "react";

function Main() {
  return (
    <div className="border border-dotted border-yellow-500 h-96 w-full">
      <Outlet />
    </div>
  );
}

export default Main;
