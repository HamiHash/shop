import AdminPanelLayout from "../../app/components/layouts/adminPanelLayout";
import { NextPageWithLayout } from "../_app";

const AdminPage: NextPageWithLayout = () => {
  return <h1>Adimn Panel</h1>;
};

AdminPage.getLayout = (page) => <AdminPanelLayout>{page}</AdminPanelLayout>;

export default AdminPage;
