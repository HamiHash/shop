import UserPanelLayout from "../../app/components/userPanelLayout";
import { NextPageWithLayout } from "../_app";

const Panel: NextPageWithLayout = () => {
  return (
    <div>
      <h2>User dashboard</h2>
    </div>
  );
};

Panel.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;

export default Panel;
