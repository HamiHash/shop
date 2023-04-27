import { ReactNode, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import Router from "next/router";

interface Props {
  children: ReactNode;
}

const AdminPanelLayout = ({ children }: Props) => {
  const { user } = useAuth();

  useEffect(() => {
    if (!user?.is_admin) {
      Router.push("/");
    }
  }, [!user?.is_admin]);

  return <div className="bg-blue-500">{children}</div>;
};

export default AdminPanelLayout;
