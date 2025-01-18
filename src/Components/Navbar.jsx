import { IoMdNotificationsOutline } from "react-icons/io";
import { TbLogin, TbLogout } from "react-icons/tb";
import Sidebar from "./Sidebar/Sidebar";
import { useContext } from "react";
import AuthContext from "../AuthContext";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const { user, signOutUser, setUser, setRole } = useContext(AuthContext);
  const { loading } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data: userDetails = "" } = useQuery({
    queryKey: ["userDetails", user?.email],
    enabled: !loading && !!user,
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/users/navbar/${user?.email}`);
      setRole(data);
      return data;
    },
  });

  const totalWorkAmount = userDetails?.completedWorks?.reduce(
    (sum, work) => sum + parseFloat(work.amount),
    parseFloat(userDetails?.balance),
  );

  const signOut = () => {
    signOutUser()
      .then(() => {
        setUser(null);
      })
      .catch(() => {});
  };

  return (
    <div className="h-16 bg-blue-500">
      <div className="container mx-auto flex justify-between text-white">
        <div className="flex h-16 items-center justify-center p-4">
          <div className="flex items-center justify-center gap-4">
            <Sidebar></Sidebar>
            <div className="flex max-w-[calc(100vw-212px)] flex-col gap-1 pb-1">
              <h1 className="truncate font-bold">
                {userDetails?.name || "log in to see Name"}
              </h1>
              <h1 className="truncate rounded-full bg-white px-2 py-0.5 text-black">
                {user ? totalWorkAmount : "Tap to balance"}
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
