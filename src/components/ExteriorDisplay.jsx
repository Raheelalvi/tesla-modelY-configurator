import { useEffect, useState } from "react";
import useCarConfigStore from "../hooks/useCarConfigStore";
import greyExt from "../assets/stealth-grey.jpg";
import whiteExt from "../assets/pearl-white.jpg";
import blueExt from "../assets/deep-blue-metallic.jpg";
import silverExt from "../assets/quicksilver.jpg";
import redExt from "../assets/ultra-red.jpg";
import blackExt from "../assets/solid-black.jpg";
import greyExtPer from "../assets/stealth-grey-performance.jpg";
import whiteExtPer from "../assets/pearl-white-performance.jpg";
import blueExtPer from "../assets/deep-blue-metallic-performance.jpg";
import silverExtPer from "../assets/quicksilver-performance.jpg";
import redExtPer from "../assets/ultra-red-performance.jpg";
import blackExtPer from "../assets/black-performance.jpg";

const ExteriorDisplay = () => {
  const { exteriorColor, wheels } = useCarConfigStore();
  const [carDisplay, setCarDisplay] = useState();

  const carImages = {
    Blue: { Standard: blueExt, Performance: blueExtPer },
    Red: { Standard: redExt, Performance: redExtPer },
    Silver: { Standard: silverExt, Performance: silverExtPer },
    Grey: { Standard: greyExt, Performance: greyExtPer },
    White: { Standard: whiteExt, Performance: whiteExtPer },
    Black: { Standard: blackExt, Performance: blackExtPer },
  };

  useEffect(() => {
    const selectedImage = carImages[exteriorColor]?.[wheels];
    setCarDisplay(selectedImage);
  }, [exteriorColor, wheels]);
  return (
    <div>
      <img src={carDisplay} alt="" />
    </div>
  );
};

export default ExteriorDisplay;
