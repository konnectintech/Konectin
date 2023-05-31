import { useState } from "react";

import Username from "./username";
import Profession from "./profession";
import TemplateSelector from "./template-selector";

const AIStarter = () => {
  const [data, setData] = useState({
    name: "",
    profession: "",
  });
  const [step, setStep] = useState(0);

  const next = (data) => {
    setStep((prev) => prev + 1);
  };

  const previous = () => {
    setStep((prev) => prev - 1);
  };

  const handleChange = (input) => (e) => {
    setData({ ...data, [input]: e.target.value });
  };

  const component_list = [
    <Username next={next} data={data} handleChange={handleChange} />,
    <Profession
      next={next}
      data={data}
      previous={previous}
      handleChange={handleChange}
    />,
    <TemplateSelector
      next={next}
      data={data}
      previous={previous}
      handleChange={handleChange}
    />,
  ];

  return (
    <main className="bg-[#EEEEEE] ">
      <div className=" w-11/12 mx-auto">{component_list[step]}</div>
    </main>
  );
};

export default AIStarter;
