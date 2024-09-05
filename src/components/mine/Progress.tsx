import React from "react";

const Progress = () => {
  const value = 500;
  const percentage = (value * 100) / 1000;

  return (
    <div className="w-[88%] ">
      <div className="flex justify-between pb-[2vw] font-normal text-[3vw] opacity-50">
        <div>Quantity of mines:</div>
        <div >{value}/1000</div>
      </div>
      <div className="w-full bg-white bg-opacity-20  h-[3.8vw] rounded-[9px]">
        <div
          style={{ width: `${percentage}%` }}
          className="h-full button-color rounded-[9px]"
        ></div>
      </div>
    </div>
  );
};

export default Progress;
