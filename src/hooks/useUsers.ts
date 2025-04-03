import { Api } from "@/api/Api";
import { useQuery } from "@tanstack/react-query";

const HALF_MINUTE_ms = 30 * 1_000;

export const useUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: Api.getUsers,
    gcTime: HALF_MINUTE_ms,
  });
