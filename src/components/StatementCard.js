import React from "react";

const StatementCard = () => {
  return (
    <div className="mt-2 shadow-sm bg-white p-4 border-2 rounded-md">
      <div className="flex justify-between mb-6">
        <img src="/assets/svgs/cargo-ship.svg" alt="cargo"></img>
        <p className="text-2xl font-semibold self-center">SGSIN - NOOSL</p>
      </div>

      <div>
        <p className="text-base font-medium">Statement of Facts</p>

        <p className="text-xs font-medium">Current Status</p>

        <p className="leading-10 text-base font-semibold text-[#5A5B6A]">
          Cargo First Lift
        </p>
      </div>

      <div className="divider"></div>

      <div className="mb-3 flex justify-between">
        <div>
          <p className="font-medium text-sm">Next Port Call</p>
          <p className="text-[#5A5B6A]">INVTZ1</p>
        </div>
        <div>
          <p className="font-medium text-sm">ETA</p>
          <p className="text-[#5A5B6A]">Nov 27, 1450 UTC</p>
        </div>
      </div>
    </div>
  );
};

export default StatementCard;
