import useCarConfigStore from "../hooks/useCarConfigStore";
import greyBtn from "../assets/button-grey.avif";
import whiteBtn from "../assets/button-white.avif";
import blueBtn from "../assets/button-blue.avif";
import silverBtn from "../assets/button-silver.avif";
import redBtn from "../assets/button-red.avif";
import blackBtn from "../assets/button-black.avif";

const ColorSelector = () => {
  const { exteriorColor, setExteriorColor } = useCarConfigStore();

  const colors = [
    { name: "Grey", value: "Grey", image: greyBtn },
    { name: "White", value: "White", image: whiteBtn },
    { name: "Blue", value: "Blue", image: blueBtn },
    { name: "Black", value: "Black", image: blackBtn },
    { name: "Red", value: "Red", image: redBtn },
    { name: "Silver", value: "Silver", image: silverBtn },
  ];

  const wheels = [
    { name: "standard wheels", value: "standard" },
    { name: "performance", vlaue: "performance" },
  ];

  return (
    <>
      <h2 className="font-semibold">Exterior Color</h2>
      {colors.map((color) => (
        <button
          key={color.value}
          onClick={() => setExteriorColor(color.value)}
          className="size-16 p-2 focus:outline-1 focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 transition-all"
        >
          <img src={color.image} alt="" />
        </button>
      ))}
    </>
  );
};

export default ColorSelector;
