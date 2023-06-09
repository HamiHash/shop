import UserPanelLayout from "../../app/components/layouts/userPanelLayout";
import UserInfo from "../../app/components/panel/userInfo";
import { NextPageWithLayout } from "../_app";

const Panel: NextPageWithLayout = () => {
  return (
    <div>
      <UserInfo />
    </div>
  );
};

Panel.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;

export default Panel;
