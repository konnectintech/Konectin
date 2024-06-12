import { useState, useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export const useCountUp = (start, end, duration) => {
  const [count, setCount] = useState(start);
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      const controls = animate(start, end, {
        duration: duration,
        onUpdate(value) {
          setCount(value.toFixed(0));
        },
      });
      return () => controls.stop();
    } else {
      setCount(start);
    }
  }, [start, end, duration, inView]);

  return [ref, count];
};
