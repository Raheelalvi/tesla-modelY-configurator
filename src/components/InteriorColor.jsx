import blackBtn from "../assets/button-black-interior.avif";
import whiteBtn from "../assets/button-light-interior.avif";
import useCarConfigStore from "../hooks/useCarConfigStore";

const InteriorColor = () => {
  const { interiorColor, setInteriorColor } = useCarConfigStore();

  const colors = [
    { name: "Dark", value: "Dark", image: blackBtn },
    { name: "Light", value: "Light", image: whiteBtn },
  ];

  return (
    <>
      <h2 className="font-semibold">Iterior Color</h2>
      {colors.map((color) => (
        <button
          key={color.value}
          onClick={() => setInteriorColor(color.value)}
          className="size-16 p-2 active:outline-1 focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 transition-all"
        >
          <img src={color.image} alt="" />
        </button>
      ))}
    </>
  );
};

export default InteriorColor;
