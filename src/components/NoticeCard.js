import React from "react";

const NoticeCard = () => {
  return (
    <div className="bg-[#EBF4FF] p-4 rounded-md shadow-sm min-w-[315px]">
      <div className="flex justify-between">
        <div>
          <p className="text-[#133774] text-lg font-bold">Ahoy Stream</p>
          <p className="text-[#5a5b6ab6] text-sm font-semibold">
            Last updated - 4 minutes ago
          </p>
        </div>
        <div>
          <img src="/assets/svgs/refresh.svg" alt="refresh"></img>
        </div>
      </div>

      <div id="message-div" className="mt-3">
        <div className="bg-[#FFFAEC] p-5 px-6 my-2 rounded-md">
          <div className="flex justify-between">
            <div>
              <p className="text-xs	text-[#E95454] font-medium	">
                Important Notice
              </p>
            </div>
            <div>
              <img src="/assets/svgs/pin.svg" alt="pin"></img>
            </div>
          </div>
          <div id="message-text" className="my-4">
            <p className="text-sm font-medium">
              Captain’s Bridge Order dated Nov 27, 2020
            </p>
          </div>

          <div className="flex justify-between">
            <div className="flex">
              <img src="/assets/svgs/eye.svg" alt="eye"></img>
              <span className="text-sm font-medium self-center">
                &nbsp;&nbsp;1
              </span>
            </div>
            <div>
              <button className="bg-[#E95454] py-2 px-6 rounded-2xl text-white text-xs tracking-widest">
                READ
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#ffffff] p-5 my-2 px-6 rounded-md text-[#213838]">
          <div className="mb-4">
            <p className="text-sm">
              <span className="font-bold">Second Officer Oliver</span> submitted
              the Deck Log for 1400-1500 watch hour and completed the Handover
              Checklist
            </p>
          </div>
          <div className="flex justify-end">
            <p className="text-sm font-bold">UTC 1105 | LT +06:30</p>
          </div>
        </div>

        <div className="bg-[#ffffff] p-5 my-2 px-6 rounded-md text-[#213838]">
          <div className="mb-4">
            <p className="text-sm">
              <span className="font-bold">Third Engineer Edward</span> submitted
              the Engine Log for 1200-1600 watch hour and completed the Handover
              Checklist
            </p>
          </div>
          <div className="flex justify-end">
            <p className="text-sm font-bold">UTC 1105 | LT +06:30</p>
          </div>
        </div>

        <div className="bg-[#ffffff] p-5 my-2 px-6 rounded-md text-[#213838]">
          <div className="mb-4">
            <p className="text-sm">
              <span className="font-bold">Third Engineer Edward</span> submitted
              the Engine Log for 1200-1600 watch hour and completed the Handover
              Checklist
            </p>
          </div>
          <div className="flex justify-end">
            <p className="text-sm font-bold">UTC 1105 | LT +06:30</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeCard;
