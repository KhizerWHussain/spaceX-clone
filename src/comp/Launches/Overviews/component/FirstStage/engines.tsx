import React from "react";

const stageDataArray = [
  { id: 1, text: "Number of engines", value: "9", spanValue: "" },
  {
    id: 2,
    text: "THRUST AT SEA LEVEL",
    value: "7,607 kN",
    spanValue: "/ 1,710,000 lbf",
  },
  {
    id: 3,
    text: "THRUST IN VACUUM",
    value: "8,227 kN",
    spanValue: "/ 1,849,500 lbf",
  },
];

const Engines = () => {
  return (
    <div className="w-full h-full my-8">
      <div className="w-full flex flex-col h-full font-medium text-xs">
        <p className="leading-6 tracking-wider text-xs">
          The nine Merlin engines on the first stage are gradually throttled
          near the end of first-stage flight to limit launch vehicle
          acceleration as the rocket’s mass decreases with the burning of fuel.
          These engines are also used to reorient the first stage prior to
          reentry and to decelerate the vehicle for landing.
        </p>
        <div className="w-full flex flex-col gap-2 uppercase mt-8">
          {stageDataArray.map((item: any, i: number) => (
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

export default Engines;
