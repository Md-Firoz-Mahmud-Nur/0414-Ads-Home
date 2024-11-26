import { TbXboxX } from "react-icons/tb";
import manPng from "../../assets/man.png";
import { PiHandWithdrawDuotone } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";

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
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
