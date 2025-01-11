import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center bg-[#EDEDF5] px-2 pt-8">
      <div className="px- container mx-auto flex flex-col gap-6 rounded-lg bg-white p-6 shadow-md">
        <Link to="/dashboard/addLink" className="btn btn-success text-white">
          Add Link
        </Link>
        <Link to="/dashboard/viewLinks" className="btn btn-info text-white">
          View Links
        </Link>
        <Link to="/dashboard/deleteLink" className="btn btn-error text-white">
          Delete Link
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
