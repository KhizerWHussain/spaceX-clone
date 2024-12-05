import VehicleHero from "@/comp/vehicleHero";
import React from "react";
import FeatureImage from "../../../assets/images/f9_feature.jpg";
import Launches from "@/comp/Launches";
import TextImage from "@/comp/Launches/TextImage";
import VehicleVideo from "@/comp/VehicleVideo";
import Performance from "@/comp/performance";
import FalconEngine from "@/comp/Falcon9Engine";
import ImagesSlider from "@/comp/ImageSlider";
import DownloadGuide from "@/comp/DownloadGuide";

// import performanceVideo from "../../../assets/video/performance.mp4";

// import performanceVideo from "../../../../videos/performance.mp4";

const FalconHeavy = () => {
  const launchesData = [
    { count: "11", text: "Total Launches" },
    { count: "19", text: "Total Landings" },
    { count: "16", text: "Total Reflights" },
  ];

  return (
    <div className="w-full h-full">
      <VehicleHero
        imageSource={FeatureImage}
        title="Falcon Heavy"
        desc="Over 5 Million Lbs of Thrust"
      />
      <Launches values={launchesData} />
      <TextImage description="Falcon Heavy is composed of three reusable Falcon 9 nine-engine cores whose 27 Merlin engines together generate more than 5 million pounds of thrust at liftoff, equal to approximately eighteen 747 aircraft. As one of the world’s most powerful operational rockets, Falcon Heavy can lift nearly 64 metric tons (141,000 lbs) to orbit." />
      {/* overview comp */}

      <VehicleVideo headline="Falcon Heavy First Flight" />

      <Performance
        videoSource="https://www.spacex.com/media/fh_performance.mp4"
        title="Unmatched Performance"
        description="With more than 5 million pounds of thrust at liftoff, Falcon Heavy is one of the most capable rockets flying. By comparison, the liftoff thrust of the Falcon Heavy equals approximately eighteen 747 aircraft at full power. Falcon Heavy can lift the equivalent of a fully loaded 737 jetliner—complete with passengers, luggage and fuel—to orbit."
      />

      <FalconEngine />
      <ImagesSlider />
      <DownloadGuide buttons={[{ id: 1, text: "Download User's Guide" }]} />
    </div>
  );
};

export default FalconHeavy;
