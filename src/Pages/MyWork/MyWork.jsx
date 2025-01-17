import { FaBangladeshiTakaSign } from "react-icons/fa6";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyWork = () => {
  const axiosSecure = useAxiosSecure();

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
                  <button className="btn btn-outline text-white hover:bg-white hover:text-black">
                    Click Here
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyWork;
