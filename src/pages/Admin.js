import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import AdminNav from "../components/AdminNav";

export default function Admin() {
  return (
    <>
      <MainHeader />
      <AdminNav />
      <h2>This is Admin page</h2>
      <section className="admin-dashboard">
        <div className="container">
          <Outlet />
        </div>
      </section>
    </>
  );
}
