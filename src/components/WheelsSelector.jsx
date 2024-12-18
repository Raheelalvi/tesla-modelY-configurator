import React from "react";
import useCarConfigStore from "../hooks/useCarConfigStore";

const WheelsSelector = () => {
  const { wheels, setWheels } = useCarConfigStore();
  return (
    <>
      <h2 className="font-semibold">Wheels</h2>
      <button
        className="block w-full bg-slate-700 text-white px-8 py-4 rounded-lg hover:bg-slate-600"
        onClick={() => setWheels("Standard")}
      >
        Standard Wheels
      </button>
      <button
        className="block w-full bg-slate-400 text-black px-8 py-4 rounded-lg hover:bg-slate-500"
        onClick={() => setWheels("Performance")}
      >
        Performance Wheels (+$2,500)
      </button>
    </>
  );
};

export default WheelsSelector;
