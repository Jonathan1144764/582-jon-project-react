import ManageUsers from "./ManageUsers";

export default function MainHeader() {
  return (
    <header>
      <div className="container">
        <div className="header-flex">
          <h1>Parks & Rec</h1>
          <ManageUsers />
        </div>
      </div>
    </header>
  );
}
