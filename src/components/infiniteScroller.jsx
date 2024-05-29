import { useEffect, useRef, useState } from "react";

function InfiniteLooper({ speed, direction, holdable, children }) {
  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    if (!innerRef?.current || !outerRef?.current) return;

    const { width } = innerRef.current.getBoundingClientRect();

    const { width: parentWidth } = outerRef.current.getBoundingClientRect();

    const instanceWidth = width / innerRef.current.children.length;

    if (width < parentWidth + instanceWidth) {
      setLooperInstances(looperInstances + Math.ceil(parentWidth / width));
    }
  }, [looperInstances]);

  return (
    <div className="looper" ref={outerRef}>
      <div
        className={`${holdable ? "holdable " : ""}looper-innerList gap-4`}
        ref={innerRef}
      >
        {[...Array(looperInstances)].map((_, index) => (
          <div
            key={index}
            className="looper-list-instance gap-4"
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === "right" ? "reverse" : "normal",
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfiniteLooper;
