import React, { useEffect, useState } from "react";
import useCarConfigStore from "../hooks/useCarConfigStore";

const TotalPrice = () => {
  const {
    wheels,
    fullSelfDriving,
    performancePackage,
    centerConsoleTray,
    sunShade,
    interiorLiners,
    totalPrice,
    setTotalPrice,
  } = useCarConfigStore();

  const [tPrice, setTPrice] = useState(40000);

  const basePrice = 52490;
  const prices = {
    wheels: {
      Standard: 0,
      Performance: 2500,
    },
    fullSelfDriving: 8500,
    performancePackage: 5000,
    centerConsoleTray: 35,
    sunShade: 105,
    interiorLiners: 225,
  };

  useEffect(() => {
    let updatedPrice = basePrice;

    updatedPrice += prices.wheels[wheels] || 0;

    if (fullSelfDriving) updatedPrice += prices.fullSelfDriving;
    if (performancePackage) updatedPrice += prices.performancePackage;
    if (centerConsoleTray) updatedPrice += prices.centerConsoleTray;
    if (sunShade) updatedPrice += prices.sunShade;
    if (interiorLiners) updatedPrice += prices.interiorLiners;

    setTPrice(updatedPrice);
    setTotalPrice(updatedPrice);
  }, [
    wheels,
    fullSelfDriving,
    performancePackage,
    centerConsoleTray,
    sunShade,
    interiorLiners,
  ]);

  return (
    <div className="p-4 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold ">Total Price</h2>
      <p className="text-2xl font-bold text-green-600 ">
        ${tPrice.toLocaleString()}
      </p>
    </div>
  );
};

export default TotalPrice;
