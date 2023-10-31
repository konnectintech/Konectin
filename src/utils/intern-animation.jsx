import { useRef, useEffect } from "react";
import { internInfo } from "./intern";

function InternAnimation() {
  const scroller = useRef(null);

  useEffect(() => {
    if (scroller) {
      const scrollerContent = Array.from(scroller.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);

        scroller.current.appendChild(duplicatedItem);
      });
    }
  }, []);

  return (
    <div className="movement-container overflow-hidden w-full text-white bg-neutral-100">
      <div className="mask">
        <div
          ref={scroller}
          className="movement p-4 flex w-max items-center gap-3 flex-nowrap"
        >
          {internInfo.map((info) => (
            <div key={info.title} className="text-sm">
              <span className="text-success-600 font-semibold">
                {info.title}
              </span>{" "}
              {info.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InternAnimation;
