import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import UploadFiles from "./uploadFiles";
import ScanResume from "./scanResume";

const ResUploadStarter = () => {
  const [data, setData] = useState({
    name: "",
    profession: "",
  });

  const handleChange = (input) => (e) => {
    setData({ ...data, [input]: e.target.value });
  };

  const component_list = [
    {
      element: ScanResume,
      link: "/scan-resume",
    },
    {
      element: UploadFiles,
      link: "/",
    },
  ];

  return (
    <div className="w-11/12 mx-auto max-w-screen-2xl">
      <section>
        <Routes>
          {component_list.map((component) => (
            <Route
              key={component.link}
              path={component.link}
              element={
                <component.element data={data} handleChange={handleChange} />
              }
            />
          ))}
        </Routes>
      </section>
    </div>
  );
};

export default ResUploadStarter;
