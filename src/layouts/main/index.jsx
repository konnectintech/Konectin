 main
import Signup from "../../signup_pages/Signup";
import Signin from "../../signup_pages/Signin";
function Main() {
  return (
    <div>
      {/* <Signup /> */}
      <Signin />
    </div>

import Landing from "../../pages/landing";
import { Routes, Route } from "react-router-dom";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </main>
 main
  );
}

export default Main;
