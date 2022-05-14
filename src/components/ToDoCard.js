import React from "react";

const ToDoCard = () => {
  return (
    <div className="bg-[#ffffff] p-4 rounded-lg shadow-sm border-2 min-w-[315px]">
      <div className="flex justify-between">
        <div>
          <p className="text-[#000000] text-lg font-bold">My Day</p>
          <p className="text-[#5a5b6ab6] text-sm font-semibold">
            Tuesday, March 2
          </p>
        </div>
        <div>
          <img src="/assets/svgs/cloud.svg" alt="cloud"></img>
        </div>
      </div>

      <div className="bg-[#F9F9F9] flex justify-between mt-4 p-4 rounded-lg">
        <div className="flex">
          <img src="/assets/svgs/checked.svg" alt="checked"></img>
          <div className="ml-4">
            <p className="line-through text-sm font-bold">
              Deck Log | 1200 - 1600 Watch
            </p>
            <p className="text-xs text-[#2d2d30b6] font-medium">
              Assigned by Wayship
            </p>
          </div>
        </div>

        <div>
          <img src="/assets/svgs/more.svg" alt="more"></img>
        </div>
      </div>

      <div className="bg-[#F9F9F9] flex justify-between mt-4 p-4 rounded-lg border-2 border-[#E95454]">
        <div className="flex">
          <img src="/assets/svgs/unchecked.svg" alt="checked"></img>
          <div className="ml-4">
            <p className="text-sm font-bold text-[#E95454]">
              COVID19 Health Guidelines
            </p>
            <p className="text-xs text-[#2d2d30b6] font-medium">
              Assigned by Technical | Due in 2 days
            </p>
          </div>
        </div>

        <div>
          <img src="/assets/svgs/more.svg" alt="more"></img>
        </div>
      </div>

      <div className="bg-[#F9F9F9] flex justify-between mt-4 p-4 rounded-lg">
        <div className="flex">
          <img src="/assets/svgs/unchecked.svg" alt="checked"></img>
          <div className="ml-4">
            <p className="text-sm font-bold">Steering Check</p>
            <p className="text-xs text-[#2d2d30b6] font-medium">
              Assigned by Captain |{" "}
              <span className="text-[#E95454]">Due in 2 hours</span>
            </p>
          </div>
        </div>

        <div>
          <img src="/assets/svgs/more.svg" alt="more"></img>
        </div>
      </div>

      <div className="bg-[#F9F9F9] flex justify-between mt-4 p-4 rounded-lg">
        <div className="flex">
          <img src="/assets/svgs/unchecked.svg" alt="checked"></img>
          <div className="ml-4">
            <p className="text-sm font-bold">ECDIS Check</p>
            <p className="text-xs text-[#2d2d30b6] font-medium">
              Assigned by Chief Officer | Due in 6 hours
            </p>
          </div>
        </div>

        <div>
          <img src="/assets/svgs/more.svg" alt="more"></img>
        </div>
      </div>

      <div className="bg-[#F9F9F9] flex justify-between mt-4 p-4 rounded-lg">
        <div className="flex">
          <img src="/assets/svgs/unchecked.svg" alt="checked"></img>
          <div className="ml-4">
            <p className="text-sm font-bold">Review Noon Report</p>
            <p className="text-xs text-[#2d2d30b6] font-medium">
              Assigned by Self | Due in 8 hours
            </p>
          </div>
        </div>

        <div>
          <img src="/assets/svgs/more.svg" alt="more"></img>
        </div>
      </div>

      <div className="flex rounded-lg border-2 mt-20 p-4">
        <img src="/assets/svgs/plus.svg" alt="plus"></img>
        <p className="text-[#787885] ml-10 font-medium">Add a to-do reminder</p>
      </div>
    </div>
  );
};

export default ToDoCard;
