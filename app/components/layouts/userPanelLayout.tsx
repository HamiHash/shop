import { ReactNode } from "react";
import useAuth from "../../hooks/useAuth";
import Router from "next/router";

interface Props {
  children: ReactNode;
}

const UserPanelLayout = ({ children }: Props) => {
  const { user, error, loading } = useAuth();

  if (loading) return <h1>loading...</h1>;

  if (error) {
    // show error
    Router.push("/auth/phone-login");
  }

  console.log(user);

  return <div className="bg-green-500">{children}</div>;
};

export default UserPanelLayout;
