import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

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
      const res = await axiosSecure.get("getAddedLinks");
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
        // axiosSecure.delete(`/users/${user._id}`).then((res) => {
        //   if (res.data.deletedCount > 0) {
        //     refetch();
        //     Swal.fire({
        //       title: "Deleted!",
        //       text: "Your file has been deleted.",
        //       icon: "success",
        //     });
        //   }
        // });
        deleteLinkMutation.mutate(id);
      }
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4">
      <h1 className="mb-4 text-center text-2xl font-semibold">View Links</h1>
      {viewLinks.links.length === 0 ? (
        <p className="text-center">No link available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">URL</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {viewLinks.links.map((link) => (
                <tr key={link._id} className="border-t">
                  <td className="px-4 py-2">{link.name}</td>
                  <td className="px-4 py-2">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      {link.url}
                    </a>
                  </td>
                  <td className="px-4 py-2">{link.amount}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDelete(link._id)}
                      className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewLinks;
