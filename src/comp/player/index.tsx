"use client";
import React from "react";
import ReactPlayer from "react-player";

interface playerProps {
  width?: string;
  height?: string;
  source: string | string[];
}

const Player = ({ source, height, width }: playerProps) => {
  return (
    <ReactPlayer
      url={source}
      playsinline={true}
      loop={true}
      playing={true}
      muted={true}
      stopOnUnmount={true}
      previewTabIndex={0}
      volume={0}
      width={width || "100%"}
      height={height || "100%"}
      style={{ width: "100%", height: "100%", minHeight: "100%" }}
    />
  );
};

export default Player;
