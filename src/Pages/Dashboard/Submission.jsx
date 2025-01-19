import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Submission = () => {
  const axiosSecure = useAxiosSecure();

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
      <div className="container mx-auto my-4 flex max-h-min flex-col items-center rounded-2xl">
        {completedWorks.length === 0 ? (
          <p className="text-center text-gray-500">No submissions yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {completedWorks.map((work, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-4 shadow-md hover:shadow-lg"
              >
                <a
                  href={work.workPhotoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={work.workPhotoUrl}
                    alt={work.name}
                    className="h-40 w-full rounded-lg border object-cover shadow-md shadow-blue-300"
                  />
                </a>
                <div className="mt-2">
                  <h2 className="text-lg font-bold">{work.name}</h2>
                  <p className="break-words text-sm text-gray-600">
                    {work.url}
                  </p>
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block truncate text-sm text-gray-600 underline"
                    title={work.url}
                  >
                    {work.url}
                  </a>

                  <p className="text-sm font-semibold text-green-600">
                    Amount: {work.amount}
                  </p>
                  <p className="text-sm font-semibold text-blue-600">
                    Email: {work.email}
                  </p>
                  <p className="text-sm font-semibold text-blue-500">
                    Mobile Number: {work.mobileNumber}
                  </p>
                  <p className="text-xs text-gray-400">
                    Submitted at:
                    {work?.workSubmittedAt
                      ? formatDate(work.workSubmittedAt)
                      : "Loading..."}
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
