"use client";
import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { classNames } from "../../../../../../util";
import Link from "next/link";

const tabs = [
  { name: "Fairing", component: <Fairing /> },
  { name: "Dragon", component: <Dragon /> },
];

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

const Payload = () => {
  return (
    <div className="w-full h-full -mt-[36rem] bg-transparent z-10">
      <div className="w-full h-full flex flex-col gap-8">
        <div className="w-full uppercase">
          <p className="text-lg">Falcon 9</p>
          <h1 className="text-5xl font-semibold">Payload</h1>
        </div>
        <TabGroup>
          <TabList className="flex gap-6 border-none">
            {tabs.map((tab: any, i: number) => (
              <Tab
                key={i}
                unselectable="off"
                className={({ selected }) =>
                  classNames(
                    "py-2 text-sm font-medium uppercase hover:text-white  focus-visible:border-b-white",
                    selected ? "border-b-[1px]  text-white" : "text-gray-500"
                  )
                }
              >
                {tab.name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-4">
            {tabs.map((tab, i: number) => (
              <TabPanel key={i}>{tab.component}</TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default Payload;

function Fairing() {
  const data = [
    { id: 1, text: "Height", value: "13.1 m", spanValue: "/ 43 ft" },
    {
      id: 2,
      text: "Diameter",
      value: "5.2 m",
      spanValue: "/ 17.1 ft",
    },
  ];
  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-6">
        <p className="text-base font-light">
          Made of a carbon composite material, the fairing protects satellites
          on their way to orbit. The fairing is jettisoned approximately 3
          minutes into flight, and SpaceX continues to recover fairings for
          reuse on future missions.
        </p>
      </div>
      <div className="w-full flex flex-col gap-2 uppercase mt-8">
        {data.map((item: any, i: number) => (
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
  );
}

function Dragon() {
  const data = [
    { id: 1, text: "Height", value: "8.1 m", spanValue: "/ 26.6ft" },
    {
      id: 2,
      text: "Diameter",
      value: "3.7 m",
      spanValue: "/ 12 ft",
    },
  ];
  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-6">
        <p className="text-base font-light">
          Dragon is capable of carrying up to 7 people and/or cargo in the
          spacecraft’s pressurized section. In addition, Dragon can carry cargo
          in the spacecraft’s unpressurized trunk, which can also accommodate
          secondary payloads.
        </p>
        <Link
          href="https://www.spacex.com/vehicles/dragon/"
          className="font-semibold"
        >
          Learn more about Dragon
        </Link>
      </div>
      <div className="w-full flex flex-col gap-2 uppercase mt-8">
        {data.map((item: any, i: number) => (
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
  );
}
