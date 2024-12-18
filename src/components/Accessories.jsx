import { useState } from "react";
import useCarConfigStore from "../hooks/useCarConfigStore";

const Accessories = () => {
  const {
    centerConsoleTray,
    sunShade,
    interiorLiners,
    toggleCenterConsoleTray,
    toggleSunshade,
    toggleinteriorLiners,
  } = useCarConfigStore();

  const [consoleTrayBox, setConsoleTrayBox] = useState(false);
  const [shadesBox, setShadesBox] = useState(false);
  const [linersBox, setLinersBox] = useState(false);

  const handleTrayChange = () => {
    setConsoleTrayBox(!consoleTrayBox);
    toggleCenterConsoleTray();
  };

  const handleShadesChange = () => {
    setShadesBox(!shadesBox);
    toggleSunshade();
  };

  const handleLinersChange = () => {
    setLinersBox(!linersBox);
    toggleinteriorLiners();
  };

  return (
    <>
      <div>
        <h2 className="font-semibold pb-2">Accessories</h2>
        <div className="form-control border border-gray-300 rounded-lg p-4 shadow-sm max-w-md mb-2">
          <label className="cursor-pointer label">
            <span className="label-text">Center Console Trays</span>
            <div className="flex gap-4 items-center justify-between">
              <input
                type="checkbox"
                checked={consoleTrayBox}
                className="checkbox checkbox-info"
                onChange={() => handleTrayChange()}
              />
              <span>35$</span>
            </div>
          </label>
        </div>
        <div className="form-control border border-gray-300 rounded-lg p-4 shadow-sm max-w-md mb-2">
          <label className="cursor-pointer label">
            <span className="label-text">Sunshade</span>
            <div className="flex items-center gap-2 justify-center">
              <input
                type="checkbox"
                checked={shadesBox}
                className="checkbox checkbox-info"
                onChange={() => handleShadesChange()}
              />
              <span>105$</span>
            </div>
          </label>
        </div>
        <div className="form-control border border-gray-300 rounded-lg p-4 shadow-sm max-w-md mb-2">
          <label className="cursor-pointer label">
            <span className="label-text">All-Weather Interior Liners</span>
            <div className="flex items-center gap-2 justify-center">
              <input
                type="checkbox"
                checked={linersBox}
                className="checkbox checkbox-info"
                onChange={() => handleLinersChange()}
              />
              <span>225$</span>
            </div>
          </label>
        </div>
      </div>
    </>
  );
};

export default Accessories;
