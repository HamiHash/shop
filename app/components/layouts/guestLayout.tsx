import { ReactNode } from "react";
import useAuth from "../../hooks/useAuth";
import Router from "next/router";

interface Props {
  children: ReactNode;
}

const GuestLayout = ({ children }: Props) => {
  const { user } = useAuth();

  if (user) Router.push("/panel");

  return <div className="bg-red-200">{children}</div>;
};

export default GuestLayout;
