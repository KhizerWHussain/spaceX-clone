"use client";
import Image from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { classNames } from "../../../util";

import testImage1 from "../../assets/images/firstStageImage.jpg";
import testImage2 from "../../assets/images/interStageImage.jpg";

const tabs = [
  {
    id: 1,
    name: "Sea Level",
    component: <SeaLevel />,
    imageSource: testImage1,
  },
  {
    id: 2,
    name: "Vaccum",
    component: <Vaccum />,
    imageSource: testImage2,
  },
];

const FalconEngine = () => {
  return (
    <div className="w-full h-screen min-h-full bg-transparent">
      <div className="w-full h-full text-white min-h-full">
        <TabGroup>
          {/* <TabPanels>
            {tabs.map((tab, i: number) => (
              <TabPanel key={i}> */}
          <Image
            // src={tab.imageSource}
            src={testImage1}
            alt="falcon-9"
            style={{ width: "100%", height: "100%", minHeight: "100%" }}
            className="w-full h-full z-0 object-cover"
          />
          {/* </TabPanel>
            ))}
          </TabPanels> */}
          <div className="w-2/5 font-thin text-sm pl-14 h-full -mt-[36rem] bg-transparent z-10">
            <div className="w-full h-full flex flex-col gap-8">
              <div className="w-full uppercase">
                <p className="text-lg">Engines</p>
                <h1 className="text-5xl font-semibold">Merlin</h1>
              </div>
              <TabList className="flex gap-6 border-none">
                {tabs.map((tab: any, i: number) => (
                  <Tab
                    key={i}
                    unselectable="off"
                    className={({ selected }) =>
                      classNames(
                        "py-2 text-sm font-medium uppercase hover:text-white  focus-visible:border-b-white",
                        selected
                          ? "border-b-[1px]  text-white"
                          : "text-gray-500"
                      )
                    }
                  >
                    {tab.name}
                  </Tab>
                ))}
              </TabList>
              <TabPanels className="mt-4 text-white z-10">
                {tabs.map((tab, i: number) => (
                  <TabPanel key={i}>{tab.component}</TabPanel>
                ))}
              </TabPanels>
            </div>
          </div>
        </TabGroup>
      </div>
    </div>
  );
};

export default FalconEngine;

function SeaLevel() {
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
    <div className="w-full text-white h-full">
      <div className="flex flex-col gap-6">
        <p className="text-base font-light">
          Merlin is a family of rocket engines developed by SpaceX for use on
          its Falcon 1, Falcon 9 and Falcon Heavy launch vehicles. Merlin
          engines use a rocket grade kerosene (RP-1) and liquid oxygen as rocket
          propellants in a gas-generator power cycle. The Merlin engine was
          originally designed for recovery and reuse.
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

function Vaccum() {
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
    <div className="w-full text-white h-full">
      <div className="flex flex-col gap-6">
        <p className="text-base font-light">
          Merlin Vacuum features a larger exhaust section and a significantly
          larger expansion nozzle to maximize the engine’s efficiency in the
          vacuum of space. Its combustion chamber is regeneratively cooled,
          while the expansion nozzle is radiatively cooled. At full power, the
          Merlin Vacuum engine operates with the greatest efficiency ever for an
          American-made hydrocarbon rocket engine.
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
