import { FaBangladeshiTakaSign } from "react-icons/fa6";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const MyWork = () => {
  const axiosSecure = useAxiosSecure();
  const [modalLink, setModalLink] = useState("");

  const {
    data: viewLinks = { links: [] },
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["viewLinks"],
    queryFn: async () => {
      const res = await axiosSecure.get("getAddedLinks");
      return res.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#EDEDF5]">
      <div className="container mx-auto flex flex-col gap-6 px-1 py-6">
        {/* card 1 */}
        {viewLinks.links.length === 0 ? (
          <p className="text-center">No link available.</p>
        ) : (
          <div className="w-full space-y-4">
            {viewLinks.links.map((link) => (
              <div
                key={link.url}
                className="flex h-full w-full flex-col gap-4 rounded-lg bg-cardBackground bg-cover bg-center p-6 text-white"
              >
                <div className="flex items-center justify-end gap-1">
                  {link.amount}.00 <FaBangladeshiTakaSign />
                </div>
                <div className="flex items-center justify-between">
                  <div>Survey</div>
                  <button
                    onClick={() => {
                      setModalLink(link.url);
                      document.getElementById("clickHereModal").showModal();
                    }}
                    className="btn btn-outline text-white hover:bg-white hover:text-black"
                  >
                    Click Here
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <dialog id="clickHereModal" className="modal">
        <div className="modal-box p-4">
          <div className="mx-auto max-w-md rounded-lg text-gray-800">
            <h2 className="mb-4 text-center text-2xl font-semibold text-blue-600">
              Instructions
            </h2>
            <ul className="space-y-4 text-left">
              <li>
                <span className="font-medium">Step 1:</span> নিচের বাটনে ক্লিক
                করলে আপনাকে একটি ওয়েবসাইটে নিয়ে যাবে যেখানে আপনাকে ২-৩ বার
                স্পেন/ইমপ্রেস বা বক্স ওপেন করতে বলবে।
              </li>
              <li>
                <span className="font-medium">Step 2:</span> এর পরে আপনাকে একটা
                সাইনআপ পেজ দিবে। ঠিক ভাবে সাইন আপ করে নিন।
              </li>
              <li>
                <span className="font-medium">Step 3:</span> সাইন আপ সম্পূর্ণ
                হয়ে গেলে একটি স্ক্রিনশট নিন এবং সেটি চেক বার এ জমা দিন।
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-around mt-6">
            <a href={modalLink} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-success text-white">Click Here to Start</button>
            </a>
            <div className="modal-action mt-0">
              <form method="dialog">
                <button className="btn btn-error text-white">Close</button>
              </form>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default MyWork;
