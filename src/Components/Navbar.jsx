import { IoMdNotificationsOutline } from "react-icons/io";
import manPng from "../assets/man.png";
import { TbLogout } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="h-16 bg-blue-500 ">
      <div className="flex justify-between text-white container mx-auto">
        <div className="flex h-16 items-center justify-center p-4 ">
          <div className="flex gap-4 items-center justify-center">
            <img className="size-10" src={manPng} alt="" />
            <div className="flex flex-col gap-1 pb-1">
              <h1 className="font-bold">Mahafuzur Rahman</h1>
              <h1 className="rounded-full bg-white py-0.5  pl-2 text-black">
                Tap to balance
              </h1>
            </div>
          </div>
        </div>
        <div className="flex items-center pr-4 gap-3">
          <IoMdNotificationsOutline className="size-7"></IoMdNotificationsOutline>
          <TbLogout className="size-7"></TbLogout>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
