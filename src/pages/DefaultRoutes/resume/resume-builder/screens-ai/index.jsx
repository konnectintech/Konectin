import Username from "./username";
import Profession from "./profession";
import TemplateSelector from "./template-selector";
import { Route, Routes } from "react-router-dom";
import { botIcon } from "../../../../../assets";
import { useTemplateContext } from "../../../../../middleware/resume";

const AIStarter = () => {
  const { templateData, onInputChange } = useTemplateContext();

  const handleInputChange = (input) => (e) => {
    onInputChange({
      section: "basicInfo",
      values: e.target.value,
      subsection: input,
    });
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
    <div className="w-11/12 mx-auto max-w-screen-2xl">
      <section className="min-h-[65vh] flex flex-col justify-center mx-auto items-center gap-6">
        <div className="w-[96px] h-[96px] flex items-center justify-center mx-auto">
          <img
            className="object-contain w-full h-full"
            src={botIcon}
            alt="Konecto-bot"
          />
        </div>
        <Routes>
          {component_list.map((component) => (
            <Route
              key={component.link}
              path={component.link}
              element={
                <component.element
                  data={templateData.basicInfo}
                  handleChange={handleInputChange}
                />
              }
            />
          ))}
        </Routes>
      </section>
    </div>
  );
};

export default AIStarter;
