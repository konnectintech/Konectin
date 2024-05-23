import { Outlet, Route, Routes } from "react-router-dom";

import College from "./college";
import HighSchool from "./high-school";
import SelectEducation from "./selectEducation";
import Other from "./other";
import EducationList from "./educationList";

const Education = ({ data }) => {
  return (
    <Routes>
      <Route
        element={
          <div className="max-w-6xl flex flex-col md:flex-row items-start justify-between self-center mx-auto gap-10">
            <Outlet />
          </div>
        }
      >
        <Route path="/" element={<SelectEducation data={data} />} />
        <Route path="/list" element={<EducationList data={data} />} />

        <Route path="/other" element={<Other />} />
        <Route path="/high-school" element={<HighSchool />} />
        <Route path="/college" element={<College />} />
      </Route>
    </Routes>
  );
};

export default Education;
