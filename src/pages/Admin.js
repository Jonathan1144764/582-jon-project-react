import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import AdminNav from "../components/AdminNav";

export default function Admin() {
  let location = useLocation().pathname;

  return (
    <>
      <MainHeader />
      <AdminNav />
      {location === "/admin" && (
        <>
          <h2>Welcome admin!</h2>
          <p>Let's get to work!</p>
        </>
      )}
      <section className="admin-dashboard">
        <div className="container">
          <Outlet />
        </div>
      </section>
    </>
  );
}
