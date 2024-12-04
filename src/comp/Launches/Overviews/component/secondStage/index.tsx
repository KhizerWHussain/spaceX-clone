import React from "react";

const secondStageDataArray = [
  { id: 1, text: "Number of engines", value: "1 vaccum", spanValue: "" },
  {
    id: 2,
    text: "Burn time",
    value: "397 sec",
    spanValue: "/ 1,710,000 lbf",
  },
  {
    id: 3,
    text: "Thrust",
    value: "981 kN",
    spanValue: "/ 220,500 lbf",
  },
];

const SecondStage = () => {
  return (
    <div className="w-full h-full -mt-[36rem] bg-transparent z-10">
      <div className="w-full h-full flex flex-col gap-8">
        <div className="w-full uppercase">
          <p className="text-lg">Falcon 9</p>
          <h1 className="text-5xl font-semibold">Second Stage</h1>
        </div>
        <div className="w-full flex flex-col gap-6 text-sm font-light leading-6 tracking-wider">
          <p>
            The second stage, powered by a single Merlin Vacuum Engine, delivers
            Falcon 9’s payload to the desired orbit. The second stage engine
            ignites a few seconds after stage separation, and can be restarted
            multiple times to place multiple payloads into different orbits.
          </p>
        </div>
        <div className="w-full flex flex-col gap-2 uppercase mt-8">
          {secondStageDataArray.map((item: any, i: number) => (
            <div
              key={`${item.id}.${i}`}
              className="w-full flex justify-between border-b-[0.5px] border-opacity-50 border-white pb-4 pt-4"
            >
              <p className="font-medium text-xs">{item.text}</p>
              <p className="text-sm font-medium">
                {item.value}{" "}
                <span className="text-gray-400">{item.spanValue}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondStage;
