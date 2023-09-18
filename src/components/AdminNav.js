import { Link } from "react-router-dom";

export default function AdminNav() {
  return (
    <nav className="admin-nav">
      <Link to="newpark">Add park</Link>
      <Link to="updatepark">Update/Delete park</Link>
      <Link to="newevent">Add event</Link>
      <Link to="updateevent">Update/Delete event</Link>
    </nav>
  );
}
