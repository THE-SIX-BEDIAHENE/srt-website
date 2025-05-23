import { useEffect, useRef, useState } from "react";

export function useInView(threshold = 0.1) {
  const ref = useRef(null); // removed the TypeScript-specific type
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, inView };
}
