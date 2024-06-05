import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypeWriter = () => {
  const el = useRef(null);
  useEffect(() => {
    const options = {
      strings: ["Farman", "Developer", "Coder"],
      typeSpeed: 120,
      backSpeed: 80,
      backDelay: 1000,
      loop: true,
      cursorChar: "|", // Set the custom cursor character
    };

    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span className="words-name-text" ref={el}></span>;
};

export default TypeWriter;
