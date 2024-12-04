"use client";
import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Overview from "./overview";
import Engines from "./engines";
import LandingLegs from "./landinglegs";
import { classNames } from "../../../../../../util";

const tabs = [
  { name: "Overview", component: <Overview /> },
  { name: "Engines", component: <Engines /> },
  { name: "Landing Legs", component: <LandingLegs /> },
];

const FirstStage = () => {
  return (
    <div className="w-full h-full z-10 -mt-[36rem]">
      <div className="w-full h-full flex flex-col gap-8">
        <div className="w-full uppercase">
          <p className="text-lg">Falcon 9</p>
          <h1 className="text-5xl font-semibold">First Stage</h1>
        </div>
        <div className="w-full flex flex-col gap-2 uppercase text-white">
          <TabGroup>
            <TabList className="flex">
              {tabs.map((tab, i: number) => (
                <Tab
                  key={i}
                  unselectable="off"
                  className={({ selected }) =>
                    classNames(
                      "px-4 py-2 text-sm font-medium uppercase",
                      selected ? "border-b-[1px]  text-white" : "text-gray-500"
                    )
                  }
                >
                  {tab.name}
                </Tab>
              ))}
            </TabList>
            <TabPanels className="mt-4">
              {tabs.map((tab, idx) => (
                <TabPanel key={idx}>{tab.component}</TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </div>
  );
};

export default FirstStage;
