import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import builderBg from "../../../assets/images/builder-bg.png";
import UploadFiles from "./UploadFiles";
import ScanResume from "./ScanResume";

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
    <main
      className=""
      style={{
        backgroundImage: `linear-gradient(rgba(249, 249, 249, 0.81), rgba(249, 249, 249, 0.81)), url("${builderBg}")`,
        backgroundSize: "cover",
      }}
    >
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
    </main>
  );
};

export default ResUploadStarter;
