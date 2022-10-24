import Landing from "../../pages/landing";
import { Routes, Route } from "react-router-dom";

function Main() {
  return (
    <div>
      <h1 className="text-4xl text-center">
        Welcome to <font className="text-primaryBtn">Ko</font>nectin - Where
        Dreams are made Through
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </h1>
    </div>
  );
}

export default Main;
