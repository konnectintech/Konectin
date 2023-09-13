import { useEffect, useState } from "react";
import { ResumeButton } from "../../../../components/button";

function SliderSection({ data }) {
  const [currentTemplate, setTemplate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTemplate((prev) => (prev < data.length - 1 ? prev + 1 : 0));
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [currentTemplate, data.length]);

  return (
    <section className="w-11/12 mx-auto max-w-screen-lg -translate-y-6 flex flex-col gap-16">
      <div className="flex flex-col gap-12">
        <div className="flex items-center justify-between text-center gap-2 w-full max-w-screen-lg mx-auto">
          {data.map((template, index) => (
            <div
              key={index}
              onClick={() => setTemplate(index)}
              className={`${
                currentTemplate === index
                  ? "text-primary-400"
                  : "text-neutral-300"
              } w-[60%] cursor-pointer flex flex-col gap-1
              `}
              aria-current={currentTemplate === index ? "page" : undefined}
            >
              <h4 className="text-[10px] sm:text-xs font-medium">
                {template.type}
              </h4>
              <small
                className={
                  currentTemplate === index
                    ? "small w-[120px] sm:w-[150px]"
                    : "small w-[90px] sm:w-[120px]"
                }
              >
                {template.title}
              </small>
              <div
                className={`
                  ${
                    currentTemplate === index
                      ? "w-3/4 bg-secondary-600"
                      : "w-7/12 bg-neutral-300"
                  }
                  mx-auto h-[1px] mt-2
                  `}
              ></div>
            </div>
          ))}
        </div>

        {data.map((template, index) => (
          <div
            key={index}
            className={
              currentTemplate === index
                ? "flex flex-col gap-8 md:flex-row md:justify-between md:items-center lg:justify-center"
                : "hidden"
            }
          >
            <img
              className="w-3/4 md:w-1/2 lg:max-w-xl mr-auto lg:mx-0"
              src={template.image}
              alt={template.type}
            />

            <div className="flex flex-col gap-8">
              <h1 className="text-2xl font-semibold md:text-3xl md:leading-relaxed lg:text-4xl max-w-md">
                {template.title}
              </h1>

              <p className="w-9/12 text-neutral-300">{template.body}</p>

              <ResumeButton />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SliderSection;
