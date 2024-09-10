import React from "react";

function InterViewWithTopThinker() {
  return (
    <div className="w-[90%] mt-[2.5rem] bg-[#060606] p-4 rounded-md grid grid-cols-2 gap-4">
      <div className="flex items-start justify-start flex-col gap-4">
        <h2 className="text-xl font-semibold">
          Interviews with top thinkers, founders,
        </h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <span className="flex items-center justify-between gap-2">
          <button className="bg-golden px-2 py-1 rounded-md">
            Call Us Now
          </button>
          <form className="flex items-center justify-center gap-2">
            <input
              type="text"
              className="outline-none border-none rounded-md p-1 pl-2"
              placeholder="Enter Your Mail"
            />
            <button className="border-golden border-2 outline-none px-2 py-1 rounded-md">
              Send Now
            </button>
          </form>
        </span>
      </div>
    </div>
  );
}

export default InterViewWithTopThinker;
