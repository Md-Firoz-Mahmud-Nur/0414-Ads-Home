import Marquee from "react-fast-marquee";
import { GiSpeaker } from "react-icons/gi";

const Notice = () => {
  return (
    <div className="container mx-auto p-4 pb-0">
      <div className="rounded-xl bg-blue-500 p-2 text-white">
        <div className="flex">
          <GiSpeaker className="mr-6 size-6"></GiSpeaker>
          <Marquee>
            <h4>Welcome to Ads Home</h4>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Notice;
