import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";

export default function Admin() {
  return (
    <>
      <MainHeader />
      <h2>This is Admin page</h2>
      <Outlet />
    </>
  );
}
