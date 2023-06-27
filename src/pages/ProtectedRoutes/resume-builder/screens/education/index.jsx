import { Outlet, Route, Routes, useNavigate } from "react-router-dom";

import College from "./college";
import HighSchool from "./high-school";
import AddType from "./addType";
import SelectEducation from "./selectEducation";

const Education = ({ data, template }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/resume/builder/experience/select-edu");
  };

  return (
    <Routes>
      <Route
        element={
          <div className="max-w-6xl flex flex-col md:flex-row items-start justify-between self-center mx-auto gap-10">
            <Outlet />
          </div>
        }
      >
        <Route path="/" element={<AddType data={data} />} />
        <Route path="/select-edu" element={<SelectEducation />} />
        <Route
          element={
            <>
              <Outlet />
              <div className="max-md:hidden">{template()}</div>
            </>
          }
        >
          <Route
            path="/college"
            element={<College handleBack={handleBack} />}
          />
          <Route
            path="/high-school"
            element={<HighSchool handleBack={handleBack} />}
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default Education;
