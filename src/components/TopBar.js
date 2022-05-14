import React from "react";

const TopBar = () => {
  return (
    <div
      id="topBar"
      className="h-20 shadow-sm bg-white p-4 border-2 rounded-md flex justify-between"
    >
      <div className="flex gap-x-4 align-middle ml-4 w-fit">
        <div className="self-center">
          <img src="/assets/svgs/ship.svg" alt="ship"></img>
        </div>
        <div>
          <p className="text-base font-bold">Demo Vessel</p>
          <p className="text-sm">
            16 Crewmates .{" "}
            <span className="font-semibold text-green-900">09 Active</span>{" "}
          </p>
        </div>
      </div>

      <div className="flex align-middle gap-x-4">
        <div className="border-2 self-center rounded-lg px-3 py-2">
          <p className="text-sm">GMT +09:00</p>
        </div>
        <div className="self-center">
          <button>
            <img src="/assets/svgs/power-btn.svg" alt="power-btn"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
