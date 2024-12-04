import React from "react";

type dataArrayType = {
  id: number;
  text: string;
  value: string;
  spanValue: string;
};

const dataArray: dataArrayType[] = [
  { id: 1, text: "Height", value: "70 m", spanValue: "/ 229.6ft" },
  { id: 2, text: "Diameter", value: "3.7 m", spanValue: "/ 12 ft" },
  { id: 3, text: "Mass", value: "549,054 kg", spanValue: "/ 1,207,920 lb" },
  {
    id: 4,
    text: "Payload to LEO",
    value: "22,800 kg",
    spanValue: "/ 50,265 lb",
  },
  {
    id: 5,
    text: "Payload to GTO",
    value: "8,300 kg",
    spanValue: "/ 18,300 lb",
  },
  {
    id: 6,
    text: "Payload to Mars",
    value: "4,020 kg",
    spanValue: "/ 8,860 lb",
  },
];

const MainCompOverview = () => {
  return (
    <div className="w-full h-full -mt-[36rem] bg-transparent z-10">
      <div className="w-full h-full flex flex-col gap-8">
        <div className="w-full uppercase">
          <p className="text-lg">Falcon 9</p>
          <h1 className="text-5xl font-semibold">Overview</h1>
        </div>
        <div className="w-full flex flex-col gap-2 uppercase">
          {dataArray.map((item: dataArrayType, i: number) => (
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

export default MainCompOverview;
