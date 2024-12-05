import React from "react";
import ReactCountUp from "../reactCountUp";

interface LaunchesProp {
  values?: {
    count: string | number;
    text: string;
  }[];
}

const Launches = ({ values }: LaunchesProp) => {
  return (
    <div className="w-full min-h-40 bg-black text-white">
      <div className="flex w-full justify-center items-center align-middle uppercase">
        <div className="w-2/3 h-80 justify-between items-center flex text-center">
          {values && values?.length > 0 ? (
            values?.map((item, i) => (
              <div
                className="w-full flex flex-col gap-4"
                key={`${i}.${item.text}`}
              >
                <p className="text-9xl">
                  <ReactCountUp
                    start={0}
                    end={Number(item.count)}
                    duration={1.5}
                    startOnMount={true}
                  />
                </p>
                <p className="font-thin text-lg">{item.text}</p>
              </div>
            ))
          ) : (
            <>
              <div className="w-full flex flex-col gap-4">
                <p className="text-9xl">
                  <ReactCountUp
                    start={0}
                    end={402}
                    duration={1.5}
                    startOnMount={true}
                  />
                </p>
                <p className="font-thin text-lg">Total Launches</p>
              </div>
              <div className="w-full flex flex-col gap-4">
                <p className="text-9xl">
                  <ReactCountUp
                    start={0}
                    end={358}
                    duration={1.5}
                    startOnMount={true}
                  />
                </p>
                <p className="font-thin text-lg">Total Landings</p>
              </div>
              <div className="w-full flex flex-col gap-4">
                <p className="text-9xl">
                  <ReactCountUp
                    start={0}
                    end={333}
                    duration={1.5}
                    startOnMount={true}
                  />
                </p>
                <p className="font-thin text-lg">Total Reflights</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Launches;
