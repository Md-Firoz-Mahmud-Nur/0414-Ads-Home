import { IoMdNotificationsOutline } from "react-icons/io";
import { TbLogin, TbLogout } from "react-icons/tb";
import Sidebar from "./Sidebar/Sidebar";
import { useContext } from "react";
import AuthContext from "../AuthContext";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import useMember from "../Hooks/useMember";

const Navbar = () => {
  const { user, signOutUser, setUser } = useContext(AuthContext);
  const signOut = () => {
    signOutUser()
      .then(() => {
        setUser(null);
      })
      .catch(() => {});
  };
  const [isMember] = useMember();
  console.log(isMember);

  return (
    <div className="h-16 bg-blue-500">
      <div className="container mx-auto flex justify-between text-white">
        <div className="flex h-16 items-center justify-center p-4">
          <div className="flex items-center justify-center gap-4">
            <Sidebar></Sidebar>
            <div className="flex flex-col gap-1 pb-1">
              <h1 className="font-bold">
                {isMember?.name || "log in to see Name"}
              </h1>
              <h1 className="rounded-full bg-white px-2 py-0.5 text-black">
                {user ? isMember?.balance : "Tap to balance"}
              </h1>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 pr-4">
          <Link to="/">
            <IoHomeOutline className="size-7"></IoHomeOutline>
          </Link>
          <IoMdNotificationsOutline className="size-7"></IoMdNotificationsOutline>
          {user ? (
            <Link onClick={signOut}>
              <TbLogout className="size-7"></TbLogout>
            </Link>
          ) : (
            <Link to="/login">
              <TbLogin className="size-7"></TbLogin>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
