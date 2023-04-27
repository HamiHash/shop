import useSWR from "swr";
import callApi from "../helpers/callApi";
import { useAppDispatch } from ".";
import { updateUser } from "../store/userDataSlice";

function useAuth() {
  const dispatch = useAppDispatch();

  const { data, error } = useSWR("user-me", () => {
    return callApi().get("/user");
  });

  if (data) dispatch(updateUser(data?.data?.user));

  console.log(data, error);

  return {
    user: data?.data?.user,
    error,
    loading: !data && !error,
  };
}

export default useAuth;
