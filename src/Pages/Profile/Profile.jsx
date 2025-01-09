import { useContext } from "react";
import AuthContext from "../../AuthContext";

const Profile = () => {
  const { user, role } = useContext(AuthContext);
  console.log(role, user);

  function formatDate(dateString) {
    const localDateString = dateString.replace("Z", "");
    const date = new Date(localDateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    const formatter = new Intl.DateTimeFormat("en-UK", options);
    const formattedDate = formatter.format(date);
    return formattedDate;
  }

  return (
    <div>
      <p>Balance: {role?.balance}</p>
      <p>your name: {role?.name}</p>
      <p>your email: {role?.email}</p>
      <p>your phone number: {role?.mobileNumber}</p>
      <p>refer by: {role?.referBy}</p>
      <p>Your refer Code: {role?.referCode}</p>
      <p>role: {role?.role}</p>
      <p>
        Created at:{" "}
        {role?.createdAt ? formatDate(role.createdAt) : "Loading..."}
      </p>
    </div>
  );
};

export default Profile;
