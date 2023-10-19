import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import AdminNav from "../components/AdminNav";

export default function Admin() {
  let location = useLocation().pathname;

  return (
    <>
      <MainHeader />
      <section className="admin-control-panel">
        <div className="container">
          <AdminNav />
          {location === "/admin" && (
            <>
              <h2>Welcome admin!</h2>
              <p>Let's get to work!</p>
            </>
          )}
          <Outlet />
        </div>
      </section>
    </>
  );
}
