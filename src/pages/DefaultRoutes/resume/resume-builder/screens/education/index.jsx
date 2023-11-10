import { Outlet, Route, Routes } from "react-router-dom";

import College from "./college";
import HighSchool from "./high-school";
import SelectEducation from "./selectEducation";
import SelectedTemplates from "../../resume-templates";
import Other from "./other";

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
        <Route
          element={
            <>
              <Outlet />
              <div className="max-md:hidden">
                <SelectedTemplates data={data} />
              </div>
            </>
          }
        >
          <Route path="/college" element={<College data={data} />} />
          <Route path="/other" element={<Other />} />
          <Route path="/high-school" element={<HighSchool />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Education;
