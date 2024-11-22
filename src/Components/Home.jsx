import { AiTwotoneNotification } from "react-icons/ai";
import { MdOutlineDeviceUnknown } from "react-icons/md";
import { PiHandWithdrawDuotone } from "react-icons/pi";
import { TbCoinTaka } from "react-icons/tb";

const Home = () => {
  return (
    <div className="container mx-auto min-h-[calc(100vh-64px)] bg-[#EDEDF5]">
      <div className="p-4">
        <div className="rounded-md border border-black bg-white text-2xl font-bold text-blue-400">
          <h1 className="p-4">Ads Home</h1>
          <div className="my-2 border-t border-black p-0"></div>
          <div className="px-4 pb-4 text-black">
            {/* grid */}
            <div className="grid grid-cols-4">
              {/* 1st icon */}
              <div className="col-3">
                <div
                  style={{ height: "100%", borderRadius: "3px" }}
                  className="row-3 p-1"
                >
                  <center>
                    <TbCoinTaka className="size-12 text-blue-500" />
                  </center>
                  <h6 className="text-center text-sm">My Work</h6>
                </div>
              </div>
              {/* 2nd icon */}
              <div className="col-3">
                <div
                  style={{ height: "100%", borderRadius: "3px" }}
                  className="row-3 p-1"
                >
                  <center>
                    <MdOutlineDeviceUnknown className="size-12 text-blue-500" />
                  </center>
                  <h6 className="text-center text-sm">Tutorial</h6>
                </div>
              </div>
              {/* 3rd icon */}
              <div className="col-3">
                <div
                  style={{ height: "100%", borderRadius: "3px" }}
                  className="row-3 p-1"
                >
                  <center>
                    <PiHandWithdrawDuotone className="size-12 text-blue-500" />
                  </center>
                  <h6 className="text-center text-sm">Withdraw</h6>
                </div>
              </div>
              {/* 4th icon */}
              <div className="col-3">
                <div
                  style={{ height: "100%", borderRadius: "3px" }}
                  className="row-3 p-1"
                >
                  <center>
                    <AiTwotoneNotification className="size-12 text-blue-500" />
                  </center>
                  <h6 className="text-center text-sm">Notice</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
