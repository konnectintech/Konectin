import { useState } from "react";

import Username from "./username";
import Profession from "./profession";
import TemplateSelector from "./template-selector";
import { Route, Routes } from "react-router-dom";
import { person4Icon } from "../../../../assets";

const AIStarter = () => {
  const [data, setData] = useState({
    name: "",
    profession: "",
  });

  const handleChange = (input) => (e) => {
    setData({ ...data, [input]: e.target.value });
  };

  const component_list = [
    {
      element: Username,
      link: "/",
    },
    {
      element: Profession,
      link: "/profession",
    },
    {
      element: TemplateSelector,
      link: "/template-selector",
    },
  ];

  return (
    <main className="bg-neutral-1000">
      <div className="w-11/12 mx-auto max-w-screen-2xl">
        <section className="min-h-[65vh] flex flex-col justify-center mx-auto items-center gap-6">
          <div className="w-[96px] h-[96px] rounded-full flex items-center justify-center mx-auto bg-slate-300">
            <img
              className="object-contain w-full h-full"
              src={person4Icon}
              alt={data.name}
            />
          </div>
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

export default AIStarter;
