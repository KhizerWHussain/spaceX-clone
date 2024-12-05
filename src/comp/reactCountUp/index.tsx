"use client";
import React from "react";
import CountUp, { CountUpProps } from "react-countup";

const ReactCountUp = ({ start, end, duration, startOnMount }: CountUpProps) => {
  return (
    <CountUp
      start={start}
      end={end}
      duration={duration}
      startOnMount={startOnMount}
    />
  );
};

export default ReactCountUp;
