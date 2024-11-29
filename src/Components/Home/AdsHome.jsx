import { AiTwotoneNotification } from "react-icons/ai";
import { FiUser, FiUserPlus } from "react-icons/fi";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineDeviceUnknown } from "react-icons/md";
import { PiHandWithdrawDuotone } from "react-icons/pi";
import { TbCoinTaka } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";

const AdsHome = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="rounded-md border border-black bg-white text-2xl font-bold text-blue-400">
        <h1 className="p-4">Ads Home</h1>
        <div className="my-2 border-t border-black p-0"></div>
        <div className="px-4 pb-4 text-black">
          {/* grid */}
          <div className="grid grid-cols-4">
            {/* 1st icon */}
            <div className="flex h-full justify-center p-1">
              <Link className="flex flex-col items-center py-2" to="/myWork">
                <TbCoinTaka className="size-12 text-blue-500" />
                <h6 className="text-center text-sm my-auto">My Work</h6>
              </Link>
            </div>
            {/* 2nd icon */}
            <div className="flex h-full justify-center p-1">
              <Link className="flex flex-col items-center py-2" to="/myWork">
                <MdOutlineDeviceUnknown className="size-12 text-blue-500" />
                <h6 className="text-center text-sm my-auto">Tutorial</h6>
              </Link>
            </div>
            {/* 3rd icon */}
            <div className="flex h-full justify-center p-1">
              <Link className="flex flex-col items-center py-2" to="/myWork">
                <PiHandWithdrawDuotone className="size-12 text-blue-500" />
                <h6 className="text-center text-sm my-auto">Withdraw</h6>
              </Link>
            </div>
            {/* 4th icon */}
            <div className="flex h-full justify-center p-1">
              <Link className="flex flex-col items-center py-2" to="/myWork">
                <AiTwotoneNotification className="size-12 text-blue-500" />
                <h6 className="text-center text-sm my-auto">Notice</h6>
              </Link>
            </div>
            {/* 5th icon */}
            <div className="flex h-full justify-center p-1">
              <Link className="flex flex-col items-center py-2" to="/myWork">
                <FiUser className="size-12 text-blue-500" />
                <h6 className="text-center text-sm my-auto">Profile</h6>
              </Link>
            </div>
            {/* 6th icon */}
            <div className="flex h-full justify-center p-1">
              <Link className="flex flex-col items-center py-2" to="/myWork">
                <FiUserPlus className="size-12 text-blue-500" />
                <h6 className="text-center text-sm my-auto">Refer</h6>
              </Link>
            </div>
            {/* 7th icon */}
            <div className="flex h-full justify-center p-1">
              <Link className="flex flex-col items-center py-2" to="/myWork">
                <GrTransaction className="size-12 text-blue-500" />
                <h6 className="text-center text-sm my-auto">Transaction</h6>
              </Link>
            </div>
            {/* 8th icon */}
            <div className="flex h-full justify-center p-1">
              <Link className="flex flex-col items-center py-2" to="/myWork">
                <TfiHeadphoneAlt className="size-12 text-blue-500" />
                <h6 className="text-center text-sm my-auto">Help Line</h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsHome;
