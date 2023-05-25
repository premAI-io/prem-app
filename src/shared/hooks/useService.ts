import { useQuery } from "@tanstack/react-query";
import getService from "modules/service-detail/api/getService";

const useService = (id: string) => {
  return useQuery(["getService", id], () => getService(id));
};

export default useService;