import ManageUsers from "./ManageUsers";
import HeaderNav from "./HeaderNav";

export default function MainHeader() {
  return (
    <header>
      <div className="container">
        <div className="header-flex">
          <h1>Parks & Rec</h1>
          <HeaderNav />
          <ManageUsers />
        </div>
      </div>
    </header>
  );
}
