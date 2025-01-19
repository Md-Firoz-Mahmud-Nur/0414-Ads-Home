import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Submission = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: completedWorks = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["completedWorks"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/completedWorks");
      return res.data;
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-start bg-[#EDEDF5] px-2">
      <h1 className="pt-4 text-center text-2xl font-semibold">
        Work Submission
      </h1>
      <div className="container mx-auto my-4 flex max-h-min flex-col items-center rounded-2xl border p-4">
        {completedWorks.length === 0 ? (
          <p className="text-center text-gray-500">No submissions yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {completedWorks.map((work, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-4 shadow-md hover:shadow-lg"
              >
                <img
                  src={work.workPhotoUrl}
                  alt={work.name}
                  className="h-40 w-full rounded-lg object-cover"
                />
                <div className="mt-2">
                  <h2 className="text-lg font-bold">{work.name}</h2>
                  <p className="text-sm text-gray-600">{work.url}</p>
                  <p className="text-sm font-semibold text-green-600">
                    Amount: {work.amount}
                  </p>
                  <p className="text-xs text-gray-400">
                    Submitted at:{" "}
                    {new Date(work.workSubmittedAt).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Submission;
