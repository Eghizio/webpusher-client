import { Api } from "@/api/Api";
import { User } from "@/components/UsersList/types";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export type UserContextValue = {
  user: User | null;
  registerUser: (username: string) => Promise<void>;
};

const UserContext = createContext<UserContextValue | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("User Context must be used within Provider.");
  }

  return context;
};

type WithChildren = {
  children: ReactNode;
};

export const UserContextProvider = ({ children }: WithChildren) => {
  const [user, setUser] = useState<User | null>(null);

  const registerUser = useCallback(
    async (username: string) => Api.registerUser(username).then(setUser),
    [Api]
  );

  const value = useMemo(
    () => ({
      user,
      registerUser,
    }),
    [user, registerUser]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
