import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loader from "../../Components/Loader";

const ViewLinks = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const {
    data: viewLinks = { links: [] },
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["viewLinks"],
    queryFn: async () => {
      const res = await axiosSecure.get("getAddedLinksAdmin");
      return res.data;
    },
  });

  const deleteLinkMutation = useMutation({
    mutationFn: async (id) => {
      await axiosSecure.delete(`deleteLink/${id}`);
    },
    onSuccess: () => {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });

      queryClient.invalidateQueries(["viewLinks"]);
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteLinkMutation.mutate(id);
      }
    });
  };

  if (isLoading) return <Loader></Loader>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-start bg-[#EDEDF5] px-2">
      <h1 className="pt-4 text-center text-2xl font-semibold">View Links</h1>
      <div className="container mx-auto my-4 flex max-h-min flex-col items-center rounded-2xl border p-0">
        {viewLinks.links.length === 0 ? (
          <p className="text-center">No link available.</p>
        ) : (
          <div className="w-full space-y-4">
            {viewLinks.links.map((link) => (
              <div
                key={link._id}
                className="flex flex-col items-start justify-between space-y-2 rounded-lg border border-gray-200 bg-white p-2 shadow-md"
              >
                <div className="flex w-full items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {link.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Amount: {link.amount}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(link._id)}
                    className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-blue-500 underline"
                >
                  {link.url}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewLinks;
