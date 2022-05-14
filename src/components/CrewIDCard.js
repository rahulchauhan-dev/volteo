import React from "react";

const CrewIDCard = () => {
  return (
    <div className="shadow-sm bg-white p-4 border-2 rounded-md">
      <div className="flex justify-between mb-6">
        <img src="/assets/jpgs/hand.jpg" alt="hand"></img>
        <img src="/assets/jpgs/navy-chart.jpg" alt="chart"></img>
      </div>

      <div>
        <p className="text-base font-medium leading-8">Third Officer</p>
        <p className="text-4xl font-bold leading-8">
          Niranjan <br></br> Pawar
        </p>
        <p className="text-xs font-medium leading-8">Crew ID 86556</p>
      </div>

      <div className="divider"></div>

      <div>
        <p className="text-lg font-medium">My Last Activity</p>

        <p className="text-[#5D6F88]">
          Submitted the Deck Log for <br></br>
          <span className="font-bold">1200-1600 Watch</span> at 08:16 UTC
        </p>
      </div>
    </div>
  );
};

export default CrewIDCard;
