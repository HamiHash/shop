import useSWR from "swr";
import Cookies from "universal-cookie";
import callApi from "../helpers/callApi";

function useAuth() {
  const cookies = new Cookies();

  const { data, error } = useSWR("user-me", () => {
    return callApi().get("/user", {
      headers: {
        authorization: cookies.get("shopy-token"),
      },
    });
  });

  console.log(data, error);

  return {
    user: data?.data?.user,
    error,
    loading: !data && !error,
  };
}

export default useAuth;
