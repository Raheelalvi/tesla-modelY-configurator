import { useEffect, useState } from "react";
import useCarConfigStore from "../hooks/useCarConfigStore";
import darkInterior from "../assets/interior-dark.jpg";
import lightInterior from "../assets/interior-light.jpg";

const InteriorDisplay = () => {
  const { interiorColor } = useCarConfigStore();
  const [interiorDisplay, setInteriorDisplay] = useState();

  const interiorImages = {
    Dark: darkInterior,
    Light: lightInterior,
  };

  useEffect(() => {
    const selectedColor = interiorImages[interiorColor];
    setInteriorDisplay(selectedColor);
  }, [interiorColor]);

  return (
    <>
      <div>
        <img src={interiorDisplay} alt="" />
      </div>
    </>
  );
};

export default InteriorDisplay;
