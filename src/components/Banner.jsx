import { useState, useEffect, useRef } from "react";
import "animate.css";

const Banner = () => {
  const [isVisible, setisVisible] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 50) setisVisible(false);
    else if (window.scrollY < 50) setisVisible(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${
        isVisible ? "animate__fadeInDown" : "animate__fadeOutUp"
      } animate__animated fixed w-full text-center py-2 bg-slate-100`}
    >
      <p className="text-xl font-semibold">
        0% APR available for qualified buyers
      </p>
    </div>
  );
};

export default Banner;
