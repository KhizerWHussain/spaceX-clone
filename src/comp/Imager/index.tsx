import Image from "next/image";
import React from "react";
import TitleSection from "./titleSection";

interface HeroProp {
  imageSource: string;
  title?: string | null;
  headline: string;
  btnText: string;
}

const Imager = ({ btnText, headline, imageSource, title }: HeroProp) => {
  return (
    <>
      <div className="relative h-screen w-screen max-w-full min-w-full overflow-hidden">
        <div className="w-full h-full min-w-full min-h-full overflow-hidden text-white">
          <Image
            src={imageSource}
            alt={headline}
            unoptimized={false}
            quality={100}
            loading="lazy"
            priority={false}
            fetchPriority="auto"
            className="w-screen h-screen"
            height={1300}
            width={1200}
          />
          <TitleSection btnText={btnText} headline={headline} title={title} />
        </div>
      </div>
    </>
  );
};

export default Imager;
