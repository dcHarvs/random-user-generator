import { useCallback, useEffect, useState } from "react";
import { User } from "../types/user";
import { default as fetchUser } from "../../api/getUser";

export default function useUser() {
  const [user, setUser] = useState<User>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getUser = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await fetchUser();
      setIsError(false);
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
