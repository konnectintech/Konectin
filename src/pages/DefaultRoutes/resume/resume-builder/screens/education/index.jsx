import { Outlet, Route, Routes } from "react-router-dom";

import College from "./college";
import HighSchool from "./high-school";
import SelectEducation from "./selectEducation";
import Other from "./other";
import CollegeList from "./collegeList";

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
        <Route path="/list" element={<CollegeList data={data} />} />
        <Route path="/" element={<SelectEducation data={data} />} />
        <Route
          element={
            <>
              <Outlet />
            </>
          }
        >
          <Route path="/college/*" element={<College data={data} />} />
          <Route path="/other" element={<Other />} />
          <Route path="/high-school" element={<HighSchool />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Education;
