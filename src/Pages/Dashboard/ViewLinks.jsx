import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const ViewLinks = () => {
  const axiosPublic = useAxiosPublic();
  const { data: viewLinks = "" } = useQuery({
    queryKey: ["viewLinks"],
    queryFn: async () => {
      const res = await axiosPublic.get("getAddedLinks");
      return res.data;
    },
  });

  console.log(viewLinks);

  return <div>this is view links</div>;
};

export default ViewLinks;
