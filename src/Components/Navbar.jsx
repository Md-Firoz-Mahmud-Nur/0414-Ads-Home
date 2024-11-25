import { IoMdNotificationsOutline } from "react-icons/io";
import { TbLogout } from "react-icons/tb";
import Sidebar from "./Sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="h-16 bg-blue-500">
      <div className="container mx-auto flex justify-between text-white">
        <div className="flex h-16 items-center justify-center p-4">
          <div className="flex items-center justify-center gap-4">
            <Sidebar></Sidebar>
            <div className="flex flex-col gap-1 pb-1">
              <h1 className="font-bold">Mahafuzur Rahman</h1>
              <h1 className="rounded-full bg-white py-0.5 pl-2 text-black">
                Tap to balance
              </h1>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 pr-4">
          <IoMdNotificationsOutline className="size-7"></IoMdNotificationsOutline>
          <TbLogout className="size-7"></TbLogout>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
