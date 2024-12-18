import React, { useState } from "react";
import useCarConfigStore from "../hooks/useCarConfigStore";

const FullSelfDriving = () => {
  const { FullSelfDriving, toggleFullSelfDriving } = useCarConfigStore();
  const [checkBox, setCheckBox] = useState();

  const handleChange = () => {
    setCheckBox(!checkBox);
    toggleFullSelfDriving();
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-sm max-w-md">
      <div className="form-control">
        <p className="font-semibold">Full Self Driving</p>

        <label className="cursor-pointer label justify-start">
          <input
            type="checkbox"
            checked={checkBox}
            className="checkbox checkbox-info"
            onChange={() => handleChange()}
          />
          <span className="label-text pl-4">
            Add Full Self-Driving for $8,500
          </span>
        </label>
      </div>
    </div>
  );
};

export default FullSelfDriving;
