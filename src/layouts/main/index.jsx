import Landing from "../../pages/landing";
import { Routes, Route } from "react-router-dom";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </main>
  );
}

export default Main;
