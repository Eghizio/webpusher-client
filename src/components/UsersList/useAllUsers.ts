import { useEffect, useState } from "react";
import { User } from "./types"; // Todo: extract type
import { Api } from "@/api/Api";
import { sleep } from "@/lib/utils";

// Todo: Refactor to legal states. data | loading | error.
// Memory leak - requires AbortController.
export const useAllUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    // Todo: remove simulating latency/error.
    sleep().then(() => {
      // if (Math.random() < 0.5) throw new Error("Random error lmao hehe xd");

      Api.getUsers()
        .then(setUsers)
        .catch(setError)
        .finally(() => setIsLoading(false));
    });
    // .catch(setError)
    // .finally(() => setIsLoading(false));
  }, []);

  return [users, isLoading, error] as const;
};

// const names = [
//   "Alice",
//   "Bob",
//   "Charlie",
//   "Diana",
//   "Ethan",
//   "Fiona",
//   "George",
//   "Hannah",
//   "Isaac",
//   "Julia",
//   "Kevin",
//   "Luna",
//   "Michael",
//   "Nina",
//   "Oscar",
//   "Penelope",
//   "VeryLongName".repeat(3),
// ];
// const users = names.map((name, id) => ({
//   id: id.toString(),
//   username: name,
//   tag: `#${id.toString().slice(0, 4)}`,
// }));
