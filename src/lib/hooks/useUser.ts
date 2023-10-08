import { useCallback, useEffect, useState } from "react";
import { User } from "../types/user";
import { default as fetchUser } from "../../api/getUser";

export default function useUser() {
  const [user, setUser] = useState<Omit<User, "id">>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getUser = useCallback(async () => {
    try {
      setIsError(false);
      setIsLoading(true);

      const { id, ...data } = await fetchUser();

      if (id) {
        localStorage.setItem(`${import.meta.env.VITE_APP_NAMESPACE}-${id.name}-${id.value}`, JSON.stringify(data));
      }

      setUser(data);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getUser();

    () => {
      setUser(undefined);
    }
  }, [getUser]);

  return { user, isLoading, isError, refetch: getUser };
}
