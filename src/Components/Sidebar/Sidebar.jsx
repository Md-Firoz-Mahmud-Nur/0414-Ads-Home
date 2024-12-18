import { TbLogout, TbXboxX } from "react-icons/tb";
import manPng from "../../assets/man.png";
import { PiHandWithdrawDuotone, PiPasswordBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { FaMoneyBills } from "react-icons/fa6";
import { FiUserPlus } from "react-icons/fi";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const Sidebar = () => {
  return (
    <div className="drawer z-10 w-10">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="drawer-button">
          <img src={manPng} alt="" className="size-10" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <img className="size-10" src={manPng} alt="" />
              <div>
                <p>01722222222</p>
                <p> 0.0</p>
              </div>
            </div>
            <TbXboxX className="text-3xl text-red-500" />
          </div>
          <div className="my-4 flex justify-around rounded-lg bg-blue-500 p-2">
            <div className="flex flex-col items-center">
              <div>
                <PiHandWithdrawDuotone className="size-14 rounded-full bg-blue-700 p-2 text-white"></PiHandWithdrawDuotone>
              </div>
              <div className="pt-1 font-light text-white">Withdraw</div>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <CgProfile className="size-14 rounded-full bg-blue-700 p-2 text-white"></CgProfile>
              </div>
              <div className="pt-1 font-light text-white">Profile</div>
            </div>
          </div>
          <li className="rounded-lg hover:bg-blue-200">
            <div className="pl-2">
              <IoHomeOutline className="size-10 rounded-full bg-blue-500 p-1.5 text-white"></IoHomeOutline>
              <span className="pl-2">Home</span>
            </div>
          </li>
          <li className="rounded-lg hover:bg-blue-200">
            <div className="pl-2">
              <FaMoneyBills className="size-10 rounded-full bg-blue-500 p-1.5 text-white"></FaMoneyBills>
              <span className="pl-2">Withdraw History</span>
            </div>
          </li>
          <li className="rounded-lg hover:bg-blue-200">
            <div className="pl-2">
              <FiUserPlus className="size-10 rounded-full bg-blue-500 p-1.5 text-white"></FiUserPlus>
              <span className="pl-2">Referral</span>
            </div>
          </li>
          <li className="rounded-lg hover:bg-blue-200">
            <div className="pl-2">
              <IoSettingsOutline className="size-10 rounded-full bg-blue-500 p-1.5 text-white"></IoSettingsOutline>
              <span className="pl-2">Account Settings</span>
            </div>
          </li>
          <li className="rounded-lg hover:bg-blue-200">
            <div className="pl-2">
              <PiPasswordBold className="size-10 rounded-full bg-blue-500 p-1.5 text-white"></PiPasswordBold>
              <span className="pl-2">Change Password</span>
            </div>
          </li>
          <li className="rounded-lg hover:bg-blue-200">
            <div className="pl-2">
              <TfiHeadphoneAlt className="size-10 rounded-full bg-blue-500 p-1.5 text-white"></TfiHeadphoneAlt>
              <span className="pl-2">Support</span>
            </div>
          </li>
          <li className="rounded-lg hover:bg-blue-200">
            <div className="pl-2">
              <TbLogout className="size-10 rounded-full bg-blue-500 p-1.5 text-white"></TbLogout>
              <span className="pl-2">Log Out</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
