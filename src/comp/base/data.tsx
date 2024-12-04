import Image1 from "../../assets/images/image1.jpg";
import Image2 from "../../assets/images/image2.jpg";
import Image3 from "../../assets/images/image3.jpg";
import Image4 from "../../assets/images/image4.jpg";

export type imagingDataType = {
  id: number;
  heading: string;
  title?: string | null;
  btnText: string;
  image: any;
};

export const imagingData = [
  {
    id: 1,
    heading: "NROL-126 Mission",
    title: "Recent Launch",
    btnText: "Rewatch",
    image: Image1,
  },
  {
    id: 2,
    heading: "Starlink Mission",
    title: "Recent Launch",
    btnText: "Rewatch",
    image: Image2,
  },
  {
    id: 3,
    heading: "ADVANCING HUMAN SPACEFLIGHT",
    title: null,
    btnText: "Learn More",
    image: Image3,
  },
  {
    id: 4,
    heading: "TO MAKE LIFE MULTIPLANETARY",
    title: null,
    btnText: "Learn More",
    image: Image4,
  },
];
