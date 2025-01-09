import { useContext } from "react";
import AuthContext from "../../AuthContext";

const Profile = () => {
  const { role } = useContext(AuthContext);

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
      <div className="min-h-[calc(100vh-64px)] bg-[#EDEDF5] px-2 pt-8">
        <div className="px- container mx-auto gap-6 rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-6 border-b pb-4 text-2xl font-bold text-blue-500">
            Profile Details
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <h3 className="text-sm text-gray-500">Balance</h3>
              <p className="text-lg font-semibold text-gray-700">
                {role?.balance} Taka
              </p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Your Name</h3>
              <p className="text-lg font-semibold text-gray-700">
                {role?.name}
              </p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Your Email</h3>
              <p className="text-lg font-semibold text-gray-700">
                {role?.email}
              </p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Your Phone Number</h3>
              <p className="text-lg font-semibold text-gray-700">
                {role?.mobileNumber}
              </p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Referred By</h3>
              <p className="text-lg font-semibold text-gray-700">
                {role?.referBy || "Not Referred"}
              </p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Your Refer Code</h3>
              <p className="text-lg font-semibold text-gray-700">
                {role?.referCode}
              </p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Role</h3>
              <p className="text-lg font-semibold text-gray-700">
                {role?.role}
              </p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Created At</h3>
              <p className="text-lg font-semibold text-gray-700">
                {role?.createdAt ? formatDate(role.createdAt) : "Loading..."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
