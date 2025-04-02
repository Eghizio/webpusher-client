import { Api } from "@/api/Api";
import { useQuery } from "@tanstack/react-query";

export const useUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: Api.getUsers,
  });
