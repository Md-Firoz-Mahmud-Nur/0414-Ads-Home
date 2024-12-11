import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import YouTubeIcon from "../../assets/Youtube.png";
import TelegramIcon from "../../assets/Telegram.png";

const Company = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="rounded-md border border-black bg-white text-2xl font-bold text-blue-400">
        <h1 className="p-4">Company</h1>
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
                  <IoSettingsOutline className="size-12 text-blue-500" />
                </center>
                <h6 className="text-center text-sm">Setting</h6>
              </div>
            </div>
            {/* 2nd icon */}
            <div className="col-3">
              <div
                style={{ height: "100%", borderRadius: "3px" }}
                className="row-3 p-1"
              >
                <center>
                  <IoIosInformationCircleOutline className="size-12 text-blue-500" />
                </center>
                <h6 className="text-center text-sm">About</h6>
              </div>
            </div>
            {/* 3rd icon */}
            <div className="col-3">
              <div
                style={{ height: "100%", borderRadius: "3px" }}
                className="row-3 p-1"
              >
                <div className="flex justify-center">
                  <img
                    className="aspect-square size-12"
                    src={YouTubeIcon}
                    alt=""
                  />
                </div>
                <h6 className="text-center text-sm">Ads Home</h6>
              </div>
            </div>
            {/* 4th icon */}
            <div className="col-3">
              <div
                style={{ height: "100%", borderRadius: "3px" }}
                className="row-3 p-1"
              >
                <div className="flex justify-center">
                  <img
                    className="aspect-square size-12"
                    src={TelegramIcon}
                    alt=""
                  />
                </div>
                <h6 className="text-center text-sm">Telegram</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
