import Username from "./username";
import Profession from "./profession";
import TemplateSelector from "./template-selector";
import { Route, Routes } from "react-router-dom";
import { person4Icon } from "../../../../assets";
import builderBg from "../../../../assets/images/builder-bg.png";
import { useTemplateContext } from "../../../../middleware/resume";

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
    <main
      className=""
      style={{
        backgroundImage: `linear-gradient(rgba(249, 249, 249, 0.81), rgba(249, 249, 249, 0.81)), url("${builderBg}")`,
        backgroundSize: "cover",
      }}
    >
      <div className="w-11/12 mx-auto max-w-screen-2xl">
        <section className="min-h-[65vh] flex flex-col justify-center mx-auto items-center gap-6">
          <div className="w-[96px] h-[96px] rounded-full flex items-center justify-center mx-auto bg-slate-300">
            <img
              className="object-contain w-full h-full"
              src={person4Icon}
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
    </main>
  );
};

export default AIStarter;
