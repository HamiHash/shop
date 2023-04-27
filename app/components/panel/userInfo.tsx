import { NextPage } from "next";
import { useAppSelector } from "../../hooks";
import { selectUser } from "../../store/userDataSlice";

const UserInfo: NextPage = () => {
  const { name, id } = useAppSelector(selectUser);

  return (
    <div>
      <h1>{name}</h1>
      <h1>{id}</h1>
    </div>
  );
};

export default UserInfo;
