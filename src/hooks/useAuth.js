import {
  useEffect,
  useState,
} from "react";

import API from "../services/api";

const useAuth = () => {

  const [
    user,
    setUser,
  ] = useState(null);

  const [
    loading,
    setLoading,
  ] = useState(true);

  useEffect(
    () => {

      const fetchUser =
        async () => {

          try {

            const token =
              localStorage.getItem(
                "token"
              );

            if (
              !token
            ) {

              setLoading(
                false
              );

              return;
            }

            const response =
              await API.get(
                "/api/user/profile"
              );

            setUser(
              response.data.user
            );

          } catch (
            error
          ) {

            localStorage.removeItem(
              "token"
            );

            localStorage.removeItem(
              "user"
            );

          } finally {

            setLoading(
              false
            );
          }
        };

      fetchUser();

    },
    []
  );

  return {

    user,

    loading,
  };
};

export default useAuth;